import {Link} from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';

const BookTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2 text-white'>
            <thead>
              <tr>
                <th className='border border-slate-600 rounded-md bg-sky-900'>No</th>
                <th className='border border-slate-600 rounded-md bg-sky-900'>Title</th>
                <th className='border border-slate-600 rounded-md max-md:hidden bg-sky-900'>Author</th>
                <th className='border border-slate-600 rounded-md max-md:hidden bg-sky-900'>Publish Year</th>
                <th className='border border-slate-600 rounded-md bg-sky-900' >Operation</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book,index)=>(
                  <tr key={book._id} className='h-8'>
                    <td className='border border-slate-700 rounded-md text-center bg-sky-700'>
                      {index+1}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center bg-sky-700'>
                      {book.title}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden bg-sky-700'>
                      {book.author}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center max-md:hidden bg-sky-700'>
                      {book.publishYear}
                    </td>
                    <td className='border border-slate-700 rounded-md text-center bg-sky-700'>
                      <div className='flex justify-center gap-x-4'>
                        <Link to={`/books/details/${book._id}`}>
                          <BsInfoCircle className='text-2xl text-green-500'/>
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                          <AiOutlineEdit className='text-2xl text-yellow-500'/>
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                          <MdOutlineDelete className='text-2xl text-red-500'/>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
  )
}

export default BookTable