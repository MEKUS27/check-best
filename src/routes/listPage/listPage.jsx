import { useState } from 'react';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import { listData } from '../../lib/dummydata';
import './listPage.scss';

function ListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(listData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper d-flex flex-wrap gap-4'>
          {currentItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <nav className='mt-4'>
          <ul className='pagination'>
            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
              >
                <button
                  className='page-link'
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <Filter />
      </div>
    </div>
  );
}

export default ListPage;
