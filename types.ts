import { StringExpressionOperatorReturningBoolean } from "mongoose";

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: ColorDetails;
  images: Image[];
};

type ColorDetails = {
  space: ColorGamut;
  name: string;
  id: string;
  value: string;
};

export interface Image {
  id: string;
  url: string;
};

export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
}

