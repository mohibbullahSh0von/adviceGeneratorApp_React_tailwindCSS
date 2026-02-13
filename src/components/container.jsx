

function Container({children}) {
    return (
        <div className='w-screen min-h-screen bg-Blue950 px-4 py-8 flex flex-col justify-center items-center'>
            {/* main container */
                children
            }
        </div>
    )
}

export default Container
