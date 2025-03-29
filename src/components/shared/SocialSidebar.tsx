import { getCurrentOrganization } from '@/requests/organizations.requests';
import { useQuery } from '@tanstack/react-query';
import Instagram from '/assets/icons/instagram.svg';
import Telegram from '/assets/icons/telegram.svg';
import Facebook from '/assets/icons/facebook.svg';
import YouTube from '/assets/icons/youtube.svg';
interface ISocialSidebar {
  className?: string;
}
const SocialSidebar = ({ className }: ISocialSidebar) => {
  const { data, isLoading } = useQuery({
    queryKey: ['current-organization'],
    queryFn: () => getCurrentOrganization(),
  });

  if (isLoading) return null;

  if (
    !data?.data.socialMedia?.instagram &&
    !data?.data.socialMedia?.telegram &&
    !data?.data.socialMedia?.facebook &&
    !data?.data.socialMedia?.youtube
  ) {
    return null;
  }

  return (
    <div
      className={` fixed right-0 top-1/3 z-50 flex flex-col gap-3 p-2 bg-[#122F4C]/70 rounded-l-12 ${className}`}
    >
      {data?.data.socialMedia?.instagram && (
        <a
          href={data?.data.socialMedia.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Instagram}
            alt={data?.data.socialMedia.instagram || ''}
            className="w-8 h-8"
            loading="lazy"
          />
        </a>
      )}

      {data?.data.socialMedia?.telegram && (
        <a
          href={data?.data.socialMedia.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Telegram}
            alt={data?.data.socialMedia.telegram || ''}
            className="w-8 h-8"
            loading="lazy"
          />
        </a>
      )}

      {data?.data.socialMedia?.facebook && (
        <a
          href={data?.data.socialMedia.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Facebook}
            alt={data?.data.socialMedia.facebook || ''}
            className="w-8 h-8"
            loading="lazy"
          />
        </a>
      )}

      {data?.data.socialMedia?.youtube && (
        <a
          href={data?.data.socialMedia.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={YouTube}
            alt={data?.data.socialMedia.youtube || ''}
            className="w-8 h-8"
            loading="lazy"
          />
        </a>
      )}
    </div>
  );
};

export default SocialSidebar;
