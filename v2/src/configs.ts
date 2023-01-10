import TitleImage from './resources/Title.jpg';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.jpg';
import GalleryPhoto2 from './resources/Gallery_Photo_2.jpg';
import GalleryPhoto3 from './resources/Gallery_Photo_3.jpg';
import GalleryPhoto4 from './resources/Gallery_Photo_4.jpg';
import GalleryPhoto5 from './resources/Gallery_Photo_5.jpg';
import GalleryPhoto6 from './resources/Gallery_Photo_6.jpg';
import GalleryPhoto7 from './resources/Gallery_Photo_7.jpg';
import GalleryPhoto8 from './resources/Gallery_Photo_8.jpg';
import GalleryPhoto9 from './resources/Gallery_Photo_9.jpg';
import GalleryPhoto10 from './resources/Gallery_Photo_10.jpg';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: '카카오톡으로 공유할 때 사용되는 대표이미지 URL을 입력해주세요!',
  weddingDate: '202X년 09월 02일, 목요일 오전 12시 00분',
  weddingLocation: '○○○웨딩, ○층 ○○홀',
  groom: {
    name: '○○○',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: '○○○',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '○○○',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '○○○',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
    GalleryPhoto7,
    GalleryPhoto8,
    GalleryPhoto9,
    GalleryPhoto10,
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
