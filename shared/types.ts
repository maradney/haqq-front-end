/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AccountDetails {
  id: number;
  user_type: string;
  profile_name: string;
  email: string;
  bio: any;
  soundcloud_url: any;
  request_clear_cache: any;
  youtube_url: string;
  youtube_urls: string[];
  facebook_url: any;
  instagram_url: any;
  twitter_url: any;
  spotify_url: any;
  website_url: any;
  tiktok_url: any;
  twitch_url: any;
  city: string;
  state: string;
  country: string;
  username: any;
  points: number;
  receive_license_link_emails: boolean;
  sign_in_count: number;
  whitelisted: boolean;
  whats_new_checked_at: any;
  signup_status: string;
  birthday: any;
  last_sign_in_at: string;
  contact_email: any;
  creative_asset_dollar_balance: string;
  discord_username: any;
  discord_discriminator: any;
  user_type_description: any;
  onboarding_survey_taken: boolean;
  sign_in_count_as_premium: number;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
  profile_image_url: string;
  banner_image_url: any;
  subscribed: boolean;
  is_premium: boolean;
  is_pro: boolean;
  premium_before_pro_release: boolean;
  before_premium_release: boolean;
  following: boolean;
  songs_user_can_download: number;
  country_pricing: CountryPricing;
  servicebot_hmac: string;
  churnkey_hmac: string;
  stripe_id: string;
  subscription_id: string;
  subscription_service: string;
  subscription_tier: string;
  subscription_started_at: string;
  subscription_ended_at: any;
  subscription_status: string;
  subscription_benefits: SubscriptionBenefits;
  primary_contact_info: PrimaryContactInfo;
  user_invitation_details: UserInvitationDetail[];
  teams: Team[];
  tags: Tag[];
  videos_created_count: any;
  auth_token: string;
}

export interface CountryPricing {
  pro_monthly_price: string;
  premium_monthly_price: string;
  pro_yearly_price: string;
  premium_yearly_price: string;
}

export interface SubscriptionBenefits {
  max_allowed_projects: number;
  max_allowed_channels: number;
  allow_download_request: boolean;
  allow_download_from_mobile: boolean;
  show_unsubscribed_prompt: boolean;
  can_add_youtube_accounts: boolean;
}

export interface PrimaryContactInfo {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
}

export interface UserInvitationDetail {
  id: number;
  code: string;
  usage_count: number;
  user_invitations_count: number;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
}

export interface Team {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
  owner: Owner;
  team_accounts: TeamAccount[];
}

export interface Owner {
  id: number;
  user_type: string;
  profile_name: string;
  email: string;
  bio: any;
  soundcloud_url: any;
  request_clear_cache: any;
  youtube_url: string;
  youtube_urls: string[];
  facebook_url: any;
  instagram_url: any;
  twitter_url: any;
  spotify_url: any;
  website_url: any;
  tiktok_url: any;
  twitch_url: any;
  city: string;
  state: string;
  country: string;
  username: any;
  points: number;
  receive_license_link_emails: boolean;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
  profile_image_url: string;
  banner_image_url: any;
  subscribed: boolean;
  is_premium: boolean;
  is_pro: boolean;
  premium_before_pro_release: boolean;
  before_premium_release: boolean;
  following: boolean;
  songs_user_can_download: number;
  country_pricing: CountryPricing2;
}

export interface CountryPricing2 {
  pro_monthly_price: string;
  premium_monthly_price: string;
  pro_yearly_price: string;
  premium_yearly_price: string;
}

export interface TeamAccount {
  id: number;
  channel_id: string;
  title: string;
  thumbnail_url: string;
  view_count: number;
  subscriber_count: number;
  video_count: number;
  custom_url: string;
  joined_at: string;
  profile_image_url: string;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
  has_owner: boolean;
  youtube_account_users_count: number;
  paid: any;
  youtube_url: string;
  verified: boolean;
}

export interface Tag {
  id: number;
  name: string;
  description: string;
  parent_tag_id: any;
  show_on_onboarding: boolean;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
  thumbnail_image_url: string;
  image_url: string;
  type_id: number;
  type_name: string;
  system_type: string;
}

export interface PlaylistPagination {
  items: Playlist[];
  extra_data: any;
  current_count: number;
  total: number;
  limit: number;
  offset: number;
}

export interface Playlist {
  id: number;
  name: string;
  description?: string;
  public: boolean;
  stack_rank: number;
  project_songs_count: number;
  project_type: string;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
  deleted: boolean;
  featured: boolean;
  art_file_url?: string;
  thumbnail_art_file_url?: string;
  user: User;
  pickups: any[];
  songs: any[];
  themes: Theme[];
}

export interface User {
  id: number;
  profile_name: string;
  bio?: string;
  profile_image_url: string;
  banner_image_url: any;
  user_type: string;
  following: boolean;
  subscribed: boolean;
  is_premium: boolean;
  sign_in_count_as_premium: number;
  is_pro: boolean;
  country?: string;
  username: any;
}

export interface Theme {
  id: number;
  name: string;
  description: string;
  parent_tag_id: any;
  show_on_onboarding: boolean;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
  thumbnail_image_url: string;
  image_url: string;
  type_id: number;
  type_name: string;
  system_type: string;
}

export interface PlaylistDetails {
  id: number;
  name: string;
  description: any;
  public: boolean;
  stack_rank: any;
  project_songs_count: number;
  project_type: string;
  created_at: string;
  updated_at: string;
  created_at_formatted: string;
  updated_at_formatted: string;
  class_name: string;
  can: {
    edit: boolean;
    delete: boolean;
  };
  deleted: boolean;
  featured: boolean;
  art_file_url: any;
  thumbnail_art_file_url: any;
  user: User;
  pickups: any[];
  songs: Song[];
  themes: any[];
}

export interface Song {
  id: number;
  song_popularity: number;
  name: string;
  description: string;
  duration: string;
  duration_in_seconds: number;
  bpm: number;
  instrumental_only: boolean;
  status: string;
  restricted_status: any;
  restricted: boolean;
  explicit: boolean;
  cover: boolean;
  remix: boolean;
  beat_purchased: boolean;
  samples_used: boolean;
  graduated: boolean;
  showable_song_matches_count: number;
  has_instrumental_song_file: boolean;
  access_tier: string;
  upvote_ratio: any;
  artist_id: number;
  artist_name: string;
  artist_image_url: string;
  artist_image_vibrant_color: any;
  album_id: number;
  album_name: string;
  album_art_url: string;
  album_art_thumbnail_url: string;
  album_guid: any;
  is_early_access: boolean;
  released_at: string;
  live_at: string;
  expired_at: any;
  created_at: string;
  expire_requested_at: any;
  song_type: string;
  downloaded: boolean;
  downloadable: boolean;
  is_presaved: boolean;
  lyrics: string;
  youtube_url: string;
  has_wav_song_file: boolean;
  pex_status: string;
  track_number: number;
  additional_credits: string;
  bookmarked: boolean;
  new: boolean;
  featured: boolean;
  stack_rank: any;
  spotify_url: string;
  itunes_url: string;
  soundcloud_url: string;
  exclude_from_content_id: boolean;
  play_count: number;
  download_count: number;
  bookmark_count: number;
  lift_count: number;
  popularity: number;
  youtube_video: any;
  creators: any[];
  total_creators_count: number;
  recent_creator_ids: string;
  song_assets: any[];
  custom_promo_link: string;
  promo_type: string;
  tags: any[];
}
