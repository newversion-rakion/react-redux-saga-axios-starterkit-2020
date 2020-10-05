import jobListingsIcon from 'images/icons/mainNav/jobListings.svg';
import membersIcon from 'images/icons/mainNav/members.svg';
import messagesIcon from 'images/icons/mainNav/messages.svg';
import teamIcon from 'images/icons/mainNav/team.svg';
import settingsIcon from 'images/icons/mainNav/settings.svg';
import contactIcon from 'images/icons/dashboard/contact.svg';

const shortcutList = [
  {
    thumb: `${jobListingsIcon}`,
    mainNav: 'View',
    description: 'Job Listings',
    path: '/company/jobs',
  },
  {
    thumb: `${membersIcon}`,
    mainNav: 'Search',
    description: 'Members',
    path: '/company/members',
  },
  {
    thumb: `${messagesIcon}`,
    mainNav: 'Read',
    description: 'Unreads',
    path: '/company/messages',
  },
  {
    thumb: `${teamIcon}`,
    mainNav: 'Invite',
    description: 'Team Members',
    path: '/company/team',
  },
  {
    thumb: `${settingsIcon}`,
    mainNav: 'Adjust',
    description: 'Settings',
    path: '/company/settings',
  },
  {
    thumb: `${contactIcon}`,
    mainNav: 'Contact',
    description: 'Support',
    path: '/company/contact',
  },
];

export default shortcutList;
