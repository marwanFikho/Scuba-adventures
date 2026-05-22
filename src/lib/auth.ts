import { Lucia } from "lucia";
import { BetterSqlite3Adapter, LibSQLAdapter } from "@lucia-auth/adapter-sqlite";
import { db, isTurso, tursoClient } from "../db/client";

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			email: string;
			role: "USER" | "ADMIN";
		};
	}
}

let adapter = null;
if (isTurso && tursoClient) {
	adapter = new LibSQLAdapter(tursoClient, {
		user: "users",
		session: "sessions"
	});
} else if (db) {
	adapter = new BetterSqlite3Adapter(db, {
		user: "users",
		session: "sessions"
	});
}

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
