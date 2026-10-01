export type ContactResponse =
  | { status: "accepted" }
  | { status: "blocked" }
  | { status: "error"; reason: "validation" | "technical" };
