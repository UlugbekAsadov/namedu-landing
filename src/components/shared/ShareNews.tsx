import React, { useState } from 'react';
import { FiCopy, FiCheck, FiShare2 } from 'react-icons/fi';
import { TwitterShareButton, TelegramShareButton } from 'react-share';

import { Button } from '@/components/shared/Button';
import { useLocaleContext } from '@/contexts/locale.context';
interface ShareNewsProps {
  newsTitle: string;
  newsUrl: string;
}

const ShareNews: React.FC<ShareNewsProps> = ({ newsTitle, newsUrl }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useLocaleContext();
  const handleCopyLink = () => {
    navigator.clipboard.writeText(newsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-lg font-normal text-slate-800">
        <FiShare2 className="" size={24} />
        <span>{t('news.share')}</span>
      </div>

      <div className="flex gap-3">
        {/* Copy Link Button */}
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition-all"
          onClick={handleCopyLink}
        >
          {copied ? (
            <>
              <FiCheck className="text-green-500" /> {t('news.copied')}
            </>
          ) : (
            <>
              <FiCopy className="" /> {t('news.link')}
            </>
          )}
        </Button>

        {/* Social Media Share Buttons */}

        <TwitterShareButton
          url={newsUrl}
          title={newsTitle}
          className="hover:opacity-80 "
        >
          <span className="text-blue-500">{t('news.twitter')}</span>
        </TwitterShareButton>

        <TelegramShareButton
          url={newsUrl}
          title={newsTitle}
          className="hover:opacity-80"
        >
          <span className="text-blue-500">{t('news.telegram')}</span>
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default ShareNews;
