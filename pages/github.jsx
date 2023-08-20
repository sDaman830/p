import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image src="/profile-pic.jpeg" className={styles.avatar}
            alt="Daman"
            width={50}
            height={50} />
          <h3 className={styles.username}>sDaman830</h3>
        </div>

        <div>
          <h3>{repos.length} repos</h3>
        </div>
      </div>

      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div className={styles.contributions}>
        <GitHubCalendar
          username="sDaman830"
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const reposRes = await fetch(
    `https://api.github.com/users/sDaman830/repos?per_page=100`,
    {
      headers: {
        Authorization: `token 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`,
      },
    }
  );
  const repos = await reposRes.json();

  return {
    props: { repos },
    revalidate: 10,
  };
}

export default GithubPage;
