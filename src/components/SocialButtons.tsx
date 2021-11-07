import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterICon from '@material-ui/icons/Twitter';

import { socialMediaLinks } from '@/constants';
import { iconNormalizedStyled } from '@/constants/styles';

const icons = {
  youtube: (
    <YouTubeIcon
      style={{
        fontSize: 36,
        ...iconNormalizedStyled,
      }}
    />
  ),
  instagram: (
    <InstagramIcon
      style={{
        fontSize: 28,
        ...iconNormalizedStyled,
      }}
    />
  ),
  twitter: (
    <TwitterICon
      style={{
        fontSize: 32,
        ...iconNormalizedStyled,
      }}
    />
  ),
  gmail: (
    <EmailIcon
      style={{
        fontSize: 32,
        ...iconNormalizedStyled,
      }}
    />
  ),
};

type SocialButtonsProps = {};
const SocialButtons: React.FC<SocialButtonsProps> = props => {
  return (
    <div className="mt-4 flex items-center dark:text-white">
      {socialMediaLinks.map(social => {
        return (
          <a
            key={social.label}
            className="mr-4"
            href={social.url}
            target="_blank"
            rel="noreferrer"
          >
            <span aria-label={social.label}>
              {icons[social.type.toLowerCase() as keyof typeof icons]}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialButtons;
