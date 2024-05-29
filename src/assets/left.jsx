import photo from '../../image0.jpeg';


export default function Left(){
    return (
        <div className="flex flex-col items-center">
            <div className="w-[300px] bg-white rounded-lg px-4 py-6 font-inter shadow-lg h-fit">
                <img src={photo} className="w-full max-h-[150px] rounded-md object-cover object-top" alt="Profile Photo" />
                <p className='font-bold pt-2 text-2xl text-slate-800'>Abdullah Amin</p>
                <p className='pt-1 text-sm text-gray-700'>Fullstack Developer</p>
            </div>
            <div className='w-[300px] mt-4 bg-white rounded-lg px-6 py-8 font-inter shadow-lg h-fit'>
                <div className='font-bold font-inter text-xl text-slate-800'>Information</div>

                <div className=''>
                    <div className='flex flex-row items-center justify-between'>
                        <p className=' text-gray-500'>Location </p>
                        <p className='font-bold text-gray-600'>Pakistan</p>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='  text-gray-500'>Education </p>
                        <p className='font-bold text-gray-600'>Computer Science</p>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='  text-gray-500'>Availability </p>
                        <p className='font-bold text-gray-600'>1 week</p>
                    </div>
                </div>
            </div>
            <div className='w-[300px] mt-4 bg-white rounded-lg  px-6 py-8 font-inter shadow-lg h-fit'>
                <div className='font-bold  text-xl text-slate-800'>Skills</div>
                <div className='flex flex-wrap font-poppins flex-row gap-2 pt-2 items-center'>
                    <div className='bg-blue-100 text-blue-500 font-600 px-4 rounded-md text-md'>NextJS</div>
                    <div className='bg-blue-100 text-blue-500 font-600 px-4 rounded-md text-md'>React</div>
                    <div className='bg-blue-100 text-blue-500 font-600 px-4 rounded-md text-md'>Node</div>
                    <div className='bg-blue-100 text-blue-500 font-600 px-4 rounded-md text-md'>PostgreSQL</div>
                    <div className='bg-blue-100 text-blue-500 font-600 px-4 rounded-md text-md'>Javascript</div>
                    <div className='bg-blue-100 text-blue-500 font-600 px-4 rounded-md text-md'>SocketIO</div>
                    <div className='bg-blue-100 text-blue-500 font-600 px-4 rounded-md text-md'>C++</div>
                    <div className='bg-blue-100 text-blue-500 font-600 px-4 rounded-md text-md'>Python</div>
                </div>
            </div>

        </div>
    );
}
