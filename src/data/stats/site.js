import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/iaotle/wip-site
 */
const data = [
  {
    label: 'Stars this repository has on github TODO',
    key: 'stargazers_count',
    link: 'https://github.com/iaotle/wip-site/stargazers',
  },
  {
    label: 'Number of people watching this repository TODO',
    key: 'subscribers_count',
    link: 'https://github.com/iaotle/wip-site/stargazers',
  },
  {
    label: 'Number of forks TODO',
    key: 'forks',
    link: 'https://github.com/iaotle/wip-site/network',
  },
  {
    label: 'Number of spoons TODO',
    value: '0',
  },
  {
    label: 'Number of linter warnings TODO',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues TODO',
    key: 'open_issues_count',
    link: 'https://github.com/iaotle/wip-site/issues',
  },
  {
    label: 'Last updated at TODO',
    key: 'pushed_at',
    link: 'https://github.com/iaotle/wip-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website TODO',
    value: '2115',
    link: 'https://github.com/iaotle/wip-site/graphs/contributors',
  },
];

export default data;
