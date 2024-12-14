"use client"
import { db } from "@/src/db";
import { UsersTable } from "@/src/db/schema/users";
import { useUser } from "@clerk/nextjs"
import { eq } from "drizzle-orm";
import React, { useEffect } from "react"

const provider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();
    useEffect(() => {
        user && isNewUser();
    }, [user])

    const isNewUser = async () => {
        const userinfo = eq(UsersTable.email, user?.primaryEmailAddress?.emailAddress!)
        const result = await db.select().from(UsersTable).where(userinfo);
        if (!result[0]) {
            await db.insert(UsersTable).values({
                name: user?.fullName || "User",
                email: user?.primaryEmailAddress?.emailAddress || "",
                imageUrl: user?.imageUrl || "",
            })
        }
    }

    return (
        <>
            {children}
        </>
    )
}

export default provider