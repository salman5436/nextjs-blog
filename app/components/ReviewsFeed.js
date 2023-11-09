// import ReviewOutline from './ReviewOutline'
// import PageLayout from './PageLayout'
// import { useSession, getSession } from 'next-auth/react'
// import prisma from '../../prisma/'

// export async function getStaticProps() {
//     // ...fetch data using prisma
//     const feed = await prisma.review.findMany({
//         where: { published: true },
//         include: {
//             author: {
//                 select: { name: true },
//             },
//         },
//     });
//     return {
//         props: { feed },
//         revalidate: 10,
//     };
// }

// // export async function getServerSideProps(context) {
// //     const session = await getSession(context);
// //     if (!session) {
// //         return {
// //             redirect: {
// //                 destination: '/signin?callbackUrl=/protected/feed',
// //                 permanent: false,
// //             },
// //         };
// //     }
// //     // No need to return props here, getStaticProps will handle it
// //     return { props: {} };
// // }


// export default function FeedReview({ feed }) {
//     // const { data: session } = useSession();

//     // if (!session) {
//     //     // Handle client-side redirect if the session is not found
//     //     // Redirect logic here
//     //     return <div>Loading...</div>; // Or a loading spinner
//     // }

//     return (
//         <section className='py-24 text-black'>
//             <PageLayout>
//                 <div className='page'>
//                     <main>
//                         {feed && feed.map((review) => (
//                             <div key={review.id} className="review">
//                                 <ReviewOutline review={review} />
//                             </div>
//                         ))}
//                     </main>
//                 </div>
//             </PageLayout>
//         </section>
//     );
// }

// // components/FeedReview.js
// // import ReviewOutline from './ReviewOutline';
// // import PageLayout from './PageLayout';

// // export default function FeedReview({ feed }) {
// //   return (
// //     <PageLayout>
// //       <div className='page'>
// //         <main>
// //           {feed.map((review) => (
// //             <div key={review.id} className="review">
// //               <ReviewOutline review={review} />
// //             </div>
// //           ))}
// //         </main>
// //       </div>
// //     </PageLayout>
// //   );
// // }

// components/FeedReview.js

import ReviewOutline from './ReviewOutline';
import PageLayout from './PageLayout';

export default function FeedReview({ feed }) { // Destructure feed here
  return (
    <PageLayout>
      <div className='page'>
        <main>
            <h1>HFIOSDHFIOS</h1>
          {/* {feed && feed.map((review) => (
            <div key={review.id} className="review">
              <ReviewOutline review={review} />
            </div>
          ))} */}
          {console.log(feed)}
        </main>
      </div>
    </PageLayout>
  );
}

