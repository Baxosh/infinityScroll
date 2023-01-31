import React, {useEffect} from 'react'
import useInfiniteScroll from "./hooks/useInfiniteScroll"

function App() {
    const {students, lastRef, isIntersecting} = useInfiniteScroll({
        root: null,
        rootMargin: '0px',
        threshold: 1
    })

    console.log(isIntersecting)

    return (
        <div className="container">
            <h1 className="title">Students</h1>

            {
                students.map((student, index) => (
                    <div
                        className={`box ${isIntersecting < index && isIntersecting > 0 ? 'pop-up' : ''}`}
                        key={student.id}>
                        <h1 className="id">{index + 1}.</h1>

                        <h1 className="name">
                            {student.name}
                        </h1>
                        &nbsp;&nbsp;&nbsp;
                        <h1 className="name">
                            {student.surname}
                        </h1>

                        {/*{students.length - 1 === index && <h1 className="first_item__render">Hello</h1>}*/}

                        {students.length - 1 === index && <h1 ref={lastRef}/>}
                    </div>
                ))
            }
        </div>
    );
}

export default App;