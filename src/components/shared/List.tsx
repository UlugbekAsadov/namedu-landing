import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { IoEyeSharp } from 'react-icons/io5';

import { Button } from '@/components/shared/Button';
import { cn } from '@/utils/utils';

interface ListProps {
  title?: string;
  fileUrl: string;
  canSee?: boolean;
  canDownload?: boolean;
  className?: string;
}

const List: React.FC<ListProps> = ({
  title,
  fileUrl,
  canSee = true,
  canDownload = true,
  className,
}) => {
  const handleView = () => {
    if (!fileUrl) return;
    window.open(fileUrl, '_blank');
  };

  const downloadFile = () => {
    if (!fileUrl) return;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = title || fileUrl.split('/').pop() || 'download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={cn(
        'w-full max-w-[1000px] mx-auto h-auto sm:h-[70px] px-4 sm:px-7 py-4 sm:py-0 rounded-16 bg-cards-lavender-blue flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0',
        className
      )}
    >
      <p className="text-text-secondary text-lg text-center sm:text-left break-words w-full sm:w-auto">
        {title}
      </p>
      <div className="flex items-center gap-3">
        {canDownload && (
          <Button
            className="bg-secondary-button flex items-center gap-2 text-sm sm:text-md font-light"
            onClick={downloadFile}
            size="sm"
          >
            Yuklash <FiDownload className="text-base sm:text-lg" />
          </Button>
        )}
        {canSee && (
          <Button
            className="w-10 h-10 flex justify-center items-center text-2xl rounded-14 border border-secondary-button text-secondary-button"
            variant="icon"
            size="icon"
            onClick={handleView}
          >
            <IoEyeSharp className="text-xl sm:text-2xl  text-secondary-button " />
          </Button>
        )}
      </div>
    </div>
  );
};

export default List;
