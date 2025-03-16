import { useState } from 'react';

import { Button } from '@/components/shared/Button';
import HeadingH1 from '@/components/shared/Heading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { scrollTo } from '@/utils/scroll-to';
import { eduInstitutesData } from '@/utils/static-resources/eduInstitites.static';
import CustomPagination from '@/components/shared/Pagination';

const EduInstitutions = () => {
  const [activeTab, setActiveTab] = useState(eduInstitutesData[0].category);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  const activeCategory = eduInstitutesData.find(
    (item) => item.category === activeTab
  );
  const institutions = activeCategory ? activeCategory.data : [];
  const totalPages = Math.ceil(institutions.length / itemsPerPage);

  const currentInstitutions = institutions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollTo({ targetId: 'table' });
  };

  return (
    <div
      id="eduInstitutes"
      className="flex flex-col  gap-10  items-center w-full px-4"
    >
      <HeadingH1 className="text-center !mb-0 text-2xl sm:text-3xl md:text-4xl ">
        Ta’lim Muassasalari
      </HeadingH1>

      {/* Category Tabs */}
      <div className="w-full max-w-[1200px] mb-6 overflow-x-auto flex flex-wrap justify-center gap-4">
        {eduInstitutesData.map((item, index) => (
          <Button
            key={index}
            className={`py-2 px-4 md:px-6 text-sm md:text-lg uppercase font-semibold transition-all duration-300 ${
              item.category === activeTab
                ? 'border border-secondary-button bg-transparent text-secondary-button'
                : 'bg-transparent text-gray-500 hover:text-secondary-button'
            }`}
            onClick={() => {
              setActiveTab(item.category);
              setCurrentPage(1);
            }}
          >
            {item.category}
          </Button>
        ))}
      </div>

      {/* Table Section */}
      <div className="w-full overflow-x-auto">
        <Table className="w-full max-w-[1200px] mx-auto text-sm md:text-md">
          <TableHeader>
            <TableRow className="h-[60px] bg-cards-lavender-blue text-secondary-heading">
              <TableHead className="px-2 text-left">№</TableHead>
              <TableHead className="px-2 text-left">
                {activeTab === 'Oliy taʼlim muassasalari'
                  ? 'Oliy taʼlim muassasasi nomi'
                  : 'Tuman nomi'}
              </TableHead>
              <TableHead className="px-2 text-left">
                Joylashgan manzili
              </TableHead>
              <TableHead className="px-2 text-left">Masul rektorlar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentInstitutions.map((item, index) => (
              <TableRow
                key={index}
                className="border-t border-b border-gray-300 text-text-secondary hover:bg-gray-100"
              >
                <TableCell className="px-2 py-4">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </TableCell>
                <TableCell className="px-2">{item.name}</TableCell>
                <TableCell className="px-2">{item.address}</TableCell>
                <TableCell className="px-2">{item.rector}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EduInstitutions;
