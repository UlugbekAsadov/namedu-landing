import { useEffect, useState } from 'react';
import { IoDocuments } from 'react-icons/io5';

import { Button } from '@/components/shared/Button';
import HeadingH1 from '@/components/shared/Heading';
import List from '@/components/shared/List';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import {
  DocumentCategoryTypes,
  IDocumentCategory,
} from '@/utils/interfaces/document-categories.interface';
import { QUERY_KEYS } from '@/utils/constants/query-keys';
import { getDocumentCategories } from '@/requests/document-categories.requests';
import { IDocument } from '@/utils/interfaces/documents.interface';
import { getDocuments } from '@/requests/documents.requests';
import { useLocaleContext } from '@/contexts/locale.context';
export const Corruptions = () => {
  const { t } = useLocaleContext();
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  const { data } = useQuery<AxiosResponse<IDocumentCategory>, Error>({
    queryKey: [
      QUERY_KEYS.DOCUMENT_CATEGORIES.ALL(DocumentCategoryTypes.Corruption),
    ],
    queryFn: () => getDocumentCategories(DocumentCategoryTypes.Corruption),
    staleTime: 1000 * 60 * 5,
  });

  const documents = useQuery<AxiosResponse<IDocument>>({
    queryKey: ['documents', `category:${activeTab}`],
    queryFn: () => getDocuments(activeTab as string),
    enabled: !!activeTab,
  });

  useEffect(() => {
    if (activeTab === undefined) {
      setActiveTab(data?.data.documentCategories?.[0]?._id || undefined);
    }
  }, [data?.data.documentCategories]);

  return (
    <div id="corruption" className="flex flex-col gap-10 items-center">
      <HeadingH1 className="!mb-0 text-center">
        {t('corruption.title')}
      </HeadingH1>
      <div className=" w-full lg:w-[1000px]  flex flex-col gap-10 items-center">
        <ScrollArea className="flex flex-col gap-5 w-full  h-[500px]  p-6  rounded-14 ">
          <div className=" w-[90%] scrollbar-hide overflow-x-scroll  flex gap-5 items-center p-2">
            {data?.data.documentCategories.map((category) => (
              <Button
                className={`p-2 px-6 uppercase font-semibold  ${category._id === activeTab ? 'border border-secondary-button bg-transparent text-secondary-button' : 'bg-transparent text-[#BABEC3]'}`}
                key={category._id}
                onClick={() => setActiveTab(category._id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {documents.data?.data.documents.length ? (
            <>
              {documents.data?.data.documents.map((item, index) => (
                <div className="flex flex-col gap-5 w-full" key={index}>
                  <List key={item._id} title={item.name} fileUrl={item.file} />
                </div>
              ))}
            </>
          ) : (
            <div className="text-[#BABEC3] text-center flex flex-col items-center gap-7 mt-20">
              <IoDocuments className="text-[100px] text-[#BABEC3]" />
              <span className="text-[20px]">{t('corruption.noDocuments')}</span>
            </div>
          )}

          <ScrollBar />
        </ScrollArea>
      </div>
    </div>
  );
};
