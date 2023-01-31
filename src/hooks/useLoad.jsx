// import {useEffect, useRef, useState} from "react";
//
//
// export default function useInfiniteScroll({options}) {
//     const [isFetching, setIsFetching] = useState(false)
//     const [students, setStudents] = useState([])
//     const lastRef = useRef(null)
//
//     function callbackFn(entries) {
//         const [entry] = entries
//         setIsFetching(entry.isIntersecting)
//     }
//     useEffect(() => generateStudents(), [ isFetching ])
//
//     useEffect(() => {
//         const observer = new IntersectionObserver(callbackFn, options)
//         if (lastRef.current) observer.observe(lastRef.current)
//
//         return () => {
//             if (lastRef.current) observer.unobserve(lastRef.current)
//         }
//
//     }, [lastRef, options])
//
//
//     function generateStudents(N = 20, max = 100) {
//         if (students.length >= max) return
//
//         const arr = Array.from({length: N}, (_) => {
//             return {
//                 id: Date.now() + Math.random(),
//                 name: 'John',
//                 surname: 'Doe',
//             }
//         })
//         setStudents(prev => [...prev, ...arr])
//     }
//
//     return {students}
// }
