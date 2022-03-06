import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { deserialize, serialize } from "borsh";

// Flexible class that takes properties and imbues them
// to the object instance
class Assignable {
  constructor(properties: any) {
    Object.keys(properties).map((key) => {
      //@ts-ignore
      return (this[key] = properties[key]);
    });
  }
}

class StartMembership extends Assignable {
  static schema = new Map([
    [
      StartMembership,
      {
        kind: "struct",
        fields: [
          ["amount", "u32"],
          ["months", "u16"],
          ["pda_bump", "u8"],
        ],
      },
    ],
  ]);
}

const connection = new Connection("http://localhost:8899", "singleGossip");
const FAN_KEYPAIR = Keypair.generate();
const CREATOR_KEYPAIR = Keypair.generate();

const subscribe = async () => {
  const programId = new PublicKey("3cqyjpcJyCeRLvYg32btdnEYaXVVydz2hNiPoLb34PRB");

  // Airdop to Payer
  await connection.confirmTransaction(
    await connection.requestAirdrop(FAN_KEYPAIR.publicKey, LAMPORTS_PER_SOL)
  );

  const [pda, bump] = await PublicKey.findProgramAddress(
    [Buffer.from("solfansseeds"), FAN_KEYPAIR.publicKey.toBuffer()],
    programId
  );

  console.log(`PDA Pubkey: ${pda.toString()}`);

  const membership = new StartMembership({
    amount: 6,
    months: 3,
    // TODO: This remains a question. Why do I have to have this in my state as well?
    pda_bump: bump,
  });

  console.log("membership: ", membership);

  let data = serialize(StartMembership.schema, membership);

  const lamports = await connection.getMinimumBalanceForRentExemption(data.length);

  console.log("!!lamports: ", lamports);

  console.log("data: ", data);
  const createPDAIx = new TransactionInstruction({
    programId: programId,
    data: Buffer.from(new Uint8Array([0, ...data])),
    keys: [
      {
        isSigner: true,
        isWritable: true,
        pubkey: FAN_KEYPAIR.publicKey,
      },
      {
        isSigner: false,
        isWritable: false,
        pubkey: CREATOR_KEYPAIR.publicKey,
      },
      {
        isSigner: false,
        isWritable: true,
        pubkey: pda,
      },
      {
        isSigner: false,
        isWritable: false,
        pubkey: SystemProgram.programId,
      },
    ],
  });

  const transaction = new Transaction();
  transaction.add(createPDAIx);
  console.log("transaction: ", transaction);

  return connection.sendTransaction(transaction, [FAN_KEYPAIR]);
};

export default subscribe;
