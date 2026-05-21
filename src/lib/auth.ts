import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { db, isDbAvailable } from "../db/client";

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			email: string;
			role: "USER" | "ADMIN";
		};
	}
}

const adapter = isDbAvailable && db ? new BetterSqlite3Adapter(db, {
	user: "users",
	session: "sessions"
}) : null;

export const lucia = adapter ? new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: import.meta.env.PROD
		}
	},
	getUserAttributes: (attributes) => {
		return {
			email: attributes.email,
			role: attributes.role
		};
	}
}) : null;
