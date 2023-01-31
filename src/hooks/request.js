import {useCallback, useEffect, useRef, useState} from "react";

export function useInfiniteScroll(options, dependencies = []) {
    const [page, setPage] = useState(1)
    const [students, setStudents] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const observer = useRef()

    useEffect(() => {
        loadItems()
    }, [page, ...dependencies])

    async function loadItems() {
        // const { response } = await items.request()
        // const oldItems = items.response ? items.response.results : []
        // const newItems = response ? response.results : []
        //
        // if (!response) return
        //
        // items.setResponse({
        //     ...response,
        //     count: response ? response.count : 0,
        //     results: uniqBy([...oldItems, ...newItems], 'id'),
        // })
        // setHasMore(oldItems.length + newItems.length !== response.count)

        // if (renderedList.length >= max) return

        const arr = Array.from({length: N}, (_) => {
            return {
                id: Date.now() + Math.random(),
                name: 'John',
                surname: 'Doe',
            }
        })
        setStudents(prev => [...prev, ...arr])
    }

    function reset() {
        loadItems()
    }

    async function reload() {
        reset()
        await items.request({params: {...options.params, page: 1}})
    }

    const ref = useCallback((node) => {
        if (items.loading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(page + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [hasMore, items.loading, page])

    return {
        ref, ...items, hasMore, reload, reset,
    }
}
