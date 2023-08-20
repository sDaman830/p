import styles from '../styles/ContactCode.module.css';

const contactItems = [
 
  {
    social: 'Leetcode',
    link: 'daman666',
    href: 'https://leetcode.com/Daman666/',
  },
  {
    social: 'email',
    link: 'sdaman830@gmail.com',
    href: 'mailto:sdaman830@gmail.com',
  },
  {
    social: 'github',
    link: 'sDaman830',
    href: 'https://github.com/sDaman830',
  },
  {
    social: 'linkedin',
    link: 'Damanpreet singh Ghatoura',
    href: 'https://www.linkedin.com/in/damanpreet-singh-9b25a9225/',
  },
  {
    social: 'twitter',
    link: 'Daman142001',
    href: 'https://twitter.com/Daman142001',
  },
  {
    social: 'instagram',
    link: 'daman_ghatoura',
    href: 'https://www.instagram.com',
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
