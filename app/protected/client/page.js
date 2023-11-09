'use client'

// import FeedReview from '../../components/ReviewsFeed'
// import { useSession } from 'next-auth/react'
// import { redirect } from 'next/navigation'


// export default function FeedViewPage() {
//     const { data: session } = useSession({
//         required: true,
//         onUnauthenticated() {
//             redirect('/signin?callbackUrl=/protected/client')
//         }
//     })

//     return (
//         <section className='py-24 text-black'>
//             <div className='container'>
//                 <h2 className='mt-4 font-medium'>You are logged in as:</h2>
//                 <p className='mt-4'>{session?.user?.name}</p>
//                 <h1 className='text-2xl font-bold'>
//                     This is your <span className='text-emerald-500'>Reviews Wall</span>{' '}
//                 </h1>

//             </div>
//             <FeedReview/>
//         </section>
//     )
// }


import { useSession, getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import FeedReview from '../../components/ReviewsFeed';

export async function getStaticProps() {
    const feed = await prisma.review.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        props: { feed },
        revalidate: 10,
    };
}


export default function FeedPage({ feed }) {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin?callbackUrl=/protected/client')
        }
    })

    return (
        <section className='py-24 text-black'>
            <div className='container'>
                <h2 className='mt-4 font-medium'>You are logged in as:</h2>
                <p className='mt-4'>{session?.user?.name}</p>
                <h1 className='text-2xl font-bold'>
                    This is your <span className='text-emerald-500'>Reviews Wall</span>{' '}
                </h1>

            </div>
            <FeedReview feed={feed} />
        </section>
    )
}