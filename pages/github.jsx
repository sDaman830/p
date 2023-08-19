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
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
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