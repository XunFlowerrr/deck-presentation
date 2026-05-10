import { bornImg, atomImg, masImg, prodImg, ponImg } from '../assets';

export const meetTheTeamHeader = {
  label: 'Aingo',
  title: 'Meet the',
  highlight: 'Team.',
  tagline: 'Five members · Four disciplines · One mission',
} as const;

export interface TeamMember {
  name: string;
  roles: string[];
  img: string;
}

export const members: TeamMember[] = [
  {
    name: 'Tanit Yodsirawong (Born)',
    roles: ['Web Developer', 'UX/UI Designer'],
    img: bornImg,
  },
  {
    name: 'Peerapat Patcharamontree (Atom)',
    roles: ['Web Developer', 'Project Manager'],
    img: atomImg,
  },
  {
    name: 'Chawin Leardswai (Mas)',
    roles: ['Data Engineer'],
    img: masImg,
  },
  {
    name: 'Puran Prasertthai (Prod)',
    roles: ['Data Engineer'],
    img: prodImg,
  },
  {
    name: 'Nattapol Teerayuttawong (Pon)',
    roles: ['AI Engineer'],
    img: ponImg,
  },
];
