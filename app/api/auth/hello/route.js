import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../api/auth/[...nextauth]/route'

//protecting our API endpoint:
//This function below opens the server to an API endpoint (for the sake of testing)

export async function GET() {
    //This is running on the server, thus the function below

    //we are checking the session
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({ message: 'You are not logged in'})
    }

    return NextResponse.json({ name: session.user.name})
}