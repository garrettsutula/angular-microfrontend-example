export class Artist {
  id: number;
  name: string;
  label: string;
  labelId: number;
  formedYear: number;
  bornYear: number;
  diedYear: number;
  disbanded: boolean;
  style: string;
  genre: string;
  mood: string;
  website: string;
  facebook: string;
  twitter: string;
  biography: string;
  members: number;
  country: string;
  countryCode: string;
  thumbnail: string;
  logo: string;
  cutout: string;
  clearArt: string;
  thumbnailWide: string;
  banner: string;
  musicBrainzID: string;
  iSNIcode: string;
  lastFMChart: string;
  charted: number;

  constructor({
    idArtist,
    strArtist,
    strLabel,
    idLabel,
    intFormedYear,
    intBornYear,
    intDiedYear,
    strDisbanded,
    strStyle,
    strGenre,
    strMood,
    strWebsite,
    strFacebook,
    strTwitter,
    strBiographyEN,
    intMembers,
    strCountry,
    strCountryCode,
    strArtistThumb,
    strArtistLogo,
    strArtistCutout,
    strArtistClearart,
    strArtistWideThumb,
    strArtistBanner,
    strMusicBrainzID,
    strISNIcode,
    strLastFMChart,
    intCharted
  }: ArtistsResponse) {
    this.id = idArtist;
    this.name = strArtist;
    this.label = strLabel;
    this.labelId = idLabel;
    this.formedYear = intFormedYear;
    this.bornYear= intBornYear;
    this.diedYear = intDiedYear;
    this.disbanded = strDisbanded === "Yes" ? true : false;
    this.style = strStyle;
    this.genre = strGenre;
    this.mood = strMood;
    this.website = strWebsite;
    this.facebook = strFacebook;
    this.twitter = strTwitter;
    this.biography = strBiographyEN;
    this.members= intMembers;
    this.country = strCountry;
    this.countryCode = strCountryCode;
    this.thumbnail = strArtistThumb;
    this.logo = strArtistLogo;
    this.cutout = strArtistCutout;
    this.clearArt = strArtistClearart;
    this.thumbnailWide = strArtistWideThumb;
    this.banner = strArtistBanner;
    this.musicBrainzID = strMusicBrainzID;
    this.iSNIcode = strISNIcode;
    this.lastFMChart = strLastFMChart;
    this.charted = intCharted;
  }
}

export interface ArtistsResponse {
  idArtist: number;
  strArtist: string;
  strArtistStripped: string;
  strArtistAlternate: string;
  strLabel: string;
  idLabel: number;
  intFormedYear: number;
  intBornYear: number;
  intDiedYear: number;
  strDisbanded: string;
  strStyle: string;
  strGenre: string;
  strMood: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strBiographyEN: string;
  strBiographyDE: string;
  strBiographyFR: string;
  strBiographyCN: string;
  strBiographyIT: string;
  strBiographyJP: string;
  strBiographyRU: string;
  strBiographyES: string;
  strBiographyPT: string;
  strBiographySE: string;
  strBiographyNL: string;
  strBiographyHU: string;
  strBiographyNO: string;
  strBiographyIL: string;
  strBiographyPL: string;
  strGender: string;
  intMembers: number;
  strCountry: string;
  strCountryCode: string;
  strArtistThumb: string;
  strArtistLogo: string;
  strArtistCutout: string;
  strArtistClearart: string;
  strArtistWideThumb: string;
  strArtistFanart: string;
  strArtistFanart2: string;
  strArtistFanart3: string;
  strArtistFanart4: string;
  strArtistBanner: string;
  strMusicBrainzID: string;
  strISNIcode: string;
  strLastFMChart: string;
  intCharted: number;
  strLocked: string;
}

export interface ArtistsSearchResponse {
  artists: ArtistsResponse[] | null;
}