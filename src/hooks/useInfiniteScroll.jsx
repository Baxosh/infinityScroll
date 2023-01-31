import {useEffect, useRef, useState} from "react";

function generateStudents(N = 20) {
    const arr = Array.from({length: N}, (_) => {
        return {
            id: Date.now() + Math.random(),
            name: 'John',
            surname: 'Doe',
        }
    })

    return arr
}


export default function useInfiniteScroll(options) {
    const [students, setStudents] = useState([])
    const [isIntersecting, setIsIntersecting] = useState(0)
    const lastRef = useRef(null)

    function callbackFn(entries) {
        const [entry] = entries
        if (entry.isIntersecting && students.length < 100) {
            const data = [...students, ...generateStudents()]
            setIsIntersecting(students.length + 1)
            setStudents(data)
        }
    }

    useEffect(() => setStudents(generateStudents()), [])

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFn, options)
        if (lastRef.current) observer.observe(lastRef.current)

        return () => {
            if (lastRef.current) {
                observer.unobserve(lastRef.current)
            }
        }
    }, [lastRef, options])

    return {students, lastRef, isIntersecting}
}
