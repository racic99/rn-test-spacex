import { TypedDocumentNode, gql } from "@apollo/client";

export type Launch = {
  id: string;
  mission_name: string;
  details: string;
  launch_date_utc: Date;
  rocket: { rocket_name: string, rocket_type: string };
};

type LaunchData = {
  launches: Launch[];
};

export const GET_LAUNCHES: TypedDocumentNode<LaunchData, unknown> = gql`
  query GetLaunches { 
    launches { 
      id 
      mission_name 
      rocket { 
        rocket_name 
        rocket_type 
      } 
      details 
      launch_date_utc
    } 
  }
`;

export type LaunchDetailsType = {
  mission_name: string;
  rocket: { rocket_name: string, rocket_type: string };
  details: string;
  launch_date_utc: Date;
  launch_site: { site_name: string };
  links: { article_link: string, video_link: string };
};

type LaunchDetailsData = {
  launch: LaunchDetailsType;
};

interface LaunchDetailsVars {
  id: string | undefined;
}

export const GET_LAUNCH_DETAILS: TypedDocumentNode<LaunchDetailsData, LaunchDetailsVars> = gql`
  query GetLaunchDetails($id: ID!) { 
    launch(id: $id) { 
      mission_name 
      rocket { 
        rocket_name 
        rocket_type 
      } 
      details 
      launch_date_utc 
      launch_site { 
        site_name 
      } 
      links { 
        article_link 
        video_link 
      } 
    } 
  }
`;