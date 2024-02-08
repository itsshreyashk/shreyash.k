// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as functions from "firebase-functions";
import * as express from "express";
import firebaseConfig from "./firebaseConfig";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase Cloud Function with Express
export const yourExpressFunction = functions.https.onRequest(expressApp);
