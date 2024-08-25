import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Review {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  user: string;
}

interface Product {
  _id: string;
  name: string;
  image: string;
  brand: string;
  quantity: number;
  category: string;
  description: string;
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  reviews: Review[];
}

interface Category {
  _id: string;
  name: string;
}

interface ShopState {
  categories: Category[];
  products: Product[];
  checked: string[];
  radio: string[];
  brandCheckboxes: Record<string, boolean>;
  checkedBrands: string[];
}

const initialState: ShopState = {
  categories: [],
  products: [],
  checked: [],
  radio: [],
  brandCheckboxes: {},
  checkedBrands: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setChecked: (state, action: PayloadAction<string[]>) => {
      state.checked = action.payload;
    },
    setRadio: (state, action: PayloadAction<string[]>) => {
      state.radio = action.payload;
    },
  },
});

export const { setCategories, setProducts, setChecked, setRadio } =
  shopSlice.actions;

export default shopSlice.reducer;
