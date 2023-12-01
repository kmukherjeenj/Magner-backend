import type { Schema, Attribute } from '@strapi/strapi';

export interface InvestmentInvestment extends Schema.Component {
  collectionName: 'components_investment_investments';
  info: {
    displayName: 'investment';
    icon: 'house';
    description: '';
  };
  attributes: {
    typer: Attribute.Enumeration<
      [
        'Ground Up',
        'Value Add',
        'Core',
        'CorePlus',
        'Stabilized',
        'Owner/User',
        'Redevelopment'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Ground Up'>;
    netOperatingIncome: Attribute.String & Attribute.Required;
    capRate: Attribute.String & Attribute.Required;
    proformaNoi: Attribute.String & Attribute.Required;
    proformaCap: Attribute.String & Attribute.Required;
    investPricePerSqft: Attribute.Float & Attribute.Required;
    investPricePerUnit: Attribute.Float & Attribute.Required;
    investPricePerSf: Attribute.Float & Attribute.Required;
    groundLease: Attribute.Enumeration<['Yes', 'No']> &
      Attribute.Required &
      Attribute.DefaultTo<'Yes'>;
    yearRemaining: Attribute.String & Attribute.Required;
    occupancy: Attribute.String & Attribute.Required;
  };
}

export interface LocationLocation extends Schema.Component {
  collectionName: 'components_location_locations';
  info: {
    displayName: 'location';
    icon: 'pinMap';
  };
  attributes: {
    fullAddress: Attribute.String & Attribute.Required;
    city: Attribute.String & Attribute.Required;
    state: Attribute.String & Attribute.Required;
    country: Attribute.String & Attribute.Required;
    latitude: Attribute.Float & Attribute.Required;
    longitude: Attribute.Float;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'investment.investment': InvestmentInvestment;
      'location.location': LocationLocation;
    }
  }
}
