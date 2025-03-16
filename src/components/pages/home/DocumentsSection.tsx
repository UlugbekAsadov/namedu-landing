import { useState } from 'react';
import { IoDocuments } from 'react-icons/io5';

import { Button } from '@/components/shared/Button';
import HeadingH1 from '@/components/shared/Heading';
import List from '@/components/shared/List';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { documentsData } from '@/utils/static-resources/documents.static';

const Documents = () => {
  const [activeTab, setActiveTab] = useState(documentsData[0].category);

  return (
    <div id="documents" className="flex flex-col gap-10 items-center">
      <HeadingH1 className="!mb-0 text-center">Me’yoriy Hujjatlar</HeadingH1>
      <div className=" w-full lg:w-[1000px]  flex flex-col gap-10 items-center">
        <div className=" w-[90%] scrollbar-hide overflow-x-scroll overflow-hidden flex gap-5 items-center">
          {documentsData.map((item, index) => (
            <Button
              className={`p-2 px-6 uppercase font-semibold  ${item.category === activeTab ? 'border border-secondary-button bg-transparent text-secondary-button' : 'bg-transparent text-[#BABEC3]'}`}
              key={index}
              onClick={() => setActiveTab(item.category)}
            >
              {item.category}
            </Button>
          ))}
        </div>

        <ScrollArea className="flex flex-col gap-5 w-full  h-[500px]  p-6  rounded-14 ">
          {documentsData.map(
            (item, index) =>
              item.category === activeTab && (
                <div className="flex flex-col gap-5 w-full" key={index}>
                  {item.files.length === 0 && (
                    <div className="text-[#BABEC3] text-center flex flex-col items-center gap-7 ">
                      <IoDocuments className="text-[100px] text-[#BABEC3]" />
                      <span className="text-[20px]">Hujjatlar topilmadi</span>
                    </div>
                  )}
                  {item.files.map((file, fileIndex) => (
                    <List
                      key={fileIndex}
                      title={file.label}
                      fileUrl={file.url}
                    />
                  ))}
                </div>
              )
          )}
          <ScrollBar />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Documents;
