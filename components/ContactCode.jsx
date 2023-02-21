import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'smitharajini@gmail.com',
    href: 'mailto:smitharajini@gmail.com',
  },
  {
    social: 'github',
    link: 'smitharajini',
    href: 'https://github.com/smitharajini',
  },
  {
    social: 'linkedin',
    link: 'smitharajini',
    href: 'https://www.linkedin.com/in/smitha-rajini-t-a289741b5/',
  },
  {
    social: 'twitter',
    link: 'not availabe',
    href: 'https://www.twitter.com/',
  },
  {
    social: 'instagram',
    link: 'smitha rajini',
    href: 'https://www.instagram.com/smitha_rajini_',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
