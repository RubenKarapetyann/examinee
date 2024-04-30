import { useEffect } from "react";
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import { useAdsProps } from "../types/hooks";

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-3216522349243958/5668440591';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['education', 'school', 'exam', 'learning'],
});

export default function useAds<ExT>({ statsRef, currentExercise }: useAdsProps<ExT>){
    useEffect(()=>{
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            interstitial.show()
        })

        if(statsRef.count % 30 === 0 && statsRef.count !== 0){
            interstitial.load();
        }

        return unsubscribe
    },[currentExercise])
}