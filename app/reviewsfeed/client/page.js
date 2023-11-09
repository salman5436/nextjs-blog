
// import ReviewOutline from '../../components/ReviewOutline'
// import PageLayout from '../../components/PageLayout'
// import { useSession } from 'next-auth/react'
// import { redirect } from 'next/navigation'
// // import prisma from '../../../prisma'

// // export const getStaticProps = async () => {
// //     const feed = await prisma.review.findMany({
// //         where: { published: true },
// //         include: {
// //             author: {
// //                 select: { name: true },
// //             },
// //         },
// //     })
// //     return {
// //         props: { feed },
// //         revalidate: 10,
// //     }
// // }


// export default function FeedReview (props) {
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
//             {/* <PageLayout>
//                 <div className='page'>
//                     <main>
//                         {props.feed.map((review) => (
//                             <div key={review.id} className="review">
//                                 <ReviewOutline review={review} />
//                             </div>
//                         ))}
//                     </main>
//                 </div>
//             </PageLayout> */}
//         </section>
//     )
// }