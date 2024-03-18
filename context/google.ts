import { Libraries } from "@react-google-maps/api";

export const libraries: Libraries = ["places"];

export const geocodeResTypes = "street_address|point_of_interest|locality";

export const places = {
  fields: "id,displayName,location",
  fieldMask: "places.displayName,places.id,places.location",
};

export const routes = {
  fieldMask:
    "routes.duration,routes.distanceMeters,routes.legs.distanceMeters,routes.legs.duration,routes.legs.startLocation,routes.legs.endLocation,routes.polyline.encodedPolyline",
};

export const placeTypesAutocomplete = ["locality"];

export const placeTypes: any[] = [
  { Culture: ["museum"] },
  {
    "Food and Drink": [
      "bakery",
      "bar",
      "cafe",
      "coffee_shop",
      "restaurant",
      "steak_house",
    ],
  },
  {
    Recreation: [
      "hiking_area",
      "historical_landmark",
      "park",
      "tourist_attraction",
      "zoo",
    ],
  },
];

export const mapOptions = {
  mapTypeControl: false,
  streetViewControl: false,
  zoomControl: true,
  rotateControl: false,
  scrollwheel: true,
  fullscreenControl: false,
};

/* temp computedRoute response */
export const directions = {
  routes: [
    {
      legs: [
        {
          distanceMeters: 197486,
          duration: "6933s",
          startLocation: {
            latLng: {
              latitude: 38.9353121,
              longitude: -74.9061177,
            },
          },
          endLocation: {
            latLng: {
              latitude: 40.2205824,
              longitude: -74.759717,
            },
          },
        },
        {
          distanceMeters: 106332,
          duration: "4512s",
          startLocation: {
            latLng: {
              latitude: 40.2205824,
              longitude: -74.759717,
            },
          },
          endLocation: {
            latLng: {
              latitude: 40.7126802,
              longitude: -74.00657629999999,
            },
          },
        },
      ],
      distanceMeters: 303818,
      duration: "11445s",
      polyline: {
        encodedPolyline:
          "upslFfbehMyBgJqCsL{y@p_@[T[j@Ib@?l@LpB@|AG|AOnAUf@WNM?sAeASAMHMZMv@OXQDg@IaCiA{I}EOQyEyDiA{@KAiIaH_CiBmAqAaAy@IQqBkAcA[aAO{BEmE@uAMiAWwR_IqCuAmDwByBwAeAo@_@Ouh@{\\{FeEaG_Fsj@mh@eFgEqF_E{E}CyGwDoFkCoc@sRmFoCyFkD_FmDyEyDqEgEqIaJeMcNuFkFyEwD{EkDyx@sg@aFoDmGkF__@q[cGoEqFoD{FeDmG_DoGoC}GcCoGkBql@kNkF_AuKcB}MyC_RoEkF}A}HoCcH}C}NmH{CkBuCwBmGyFgNmM_LeJiy@ev@sEuDeGkEgqA}{@cGmDuFqCkGmCqOwFkGoCeG_D_GoDgFoDsFmE_FoEoFuFkEcFyKkN}EsFuFsFoL}K_DmDmCmDqDuFeEiHyDuH}^ox@_BcDeD_GoDwFyDmFqDmEiEwEiF_FsFoEwF}D_FwCeRgKoEsCkMyJ{I}GqH_FeWyNmFoDeF}D}EkEgFkF}DwEcEsFmDmFoCwE{HcNyD_GeEuFmEgFcEgEyEiEec@}]}FoFgK{KsT{UoEiEiFqEocA{u@iQuMgFqEoEmEeEyE_EgFmFeHyB{BkL}K_CoCgCmDcHaLiDuE{IcKgKmLcFcFgGmFuGaF{SsOmFsEiFcFoF_GwE}F_F}GaF_IsLmReEgG_FkGwEiFoEiE}EcEqGuEsEuCaYkPwFuDuDuCsDgDmFsFaE_FeGoIeHwJkDgEuDcEaEuDuEuD}EgDqRsLcD}BcEiD}DsD}KoL{J}KmYu\\sDuDaEmD}DyCkEoCkW}N{DiC{D{CwE_E_E}DqEeFkDqEcD_FcJiOgCqDcCsCiCiCaDiCuDeCkCuAsD_BwDkAmCo@sEs@cXcDkDo@iD}@mqAua@iP}E}Dy@mDe@{C[mFQyCDkDZgEp@gFjAsTdHqCj@mD`@wCNuCAyCOiDc@uDy@iD_A_DiAeEkBeDgBaC}AuDuCgD}CsC}CeUuXgCmCmD{CeDaCaE_CwEyBuDsAcNiEmDwA}CyAuD{BmHeFqWmS}DkC{CcB_EgBwEaBcLqDiDwAuC{AwCmBuDyCiCgCyY_]mDmDuD_DyDsCwEsCgEuBkEgBeF_BwEiA}`@_HiD{@yDsA_DwAkDqBqE_DcSwN_HqEsIwFiA_AwAqAcBgB_CwC}CuEiKgPgDwEsCkDyDiEmFkFcEkDoEkDaJcGuOqJyTeNmCwAaDqAmDcAyW}GaGmBaJmDmHgDyBeAcDmBcB{@s@a@E]s@s@g@s@Ym@Qs@Kq@C}@FkANu@Zy@`@i@p@i@v@Wl@Gr@Dt@Vj@b@j@z@`@fANjA?`AOvA_@xABZcN`_@eOpa@c^faAeHlRyB|EqBxD}BnD}B~CaDtDiEdEkU|SaDjDeC|CiCzD{B|DuCdGuBfF_BzEkAfEiLjg@yJ~b@sPfu@qB|I_@lAI`@kApDoBrFaCvFaDnG_DlFuCdEeDdEsD`E}CtCgEjD}DpC}D~BaFdC{EjB}E|AuEfAsEx@aEd@u]lCsPpAmFp@qEz@}DbAyE|AkDtA}E~BaE`CmExCiElDqEjEwCdDaFhGwDjFcNhTeR`Zky@rqAaj@f|@gUh_@yFfJkDjFuGnJ{GnKcBxCUj@iCrE{DbGmElGSNe]|i@{Sb\\iH`KsE`Gid@zi@c{@ncAiYd]{EnG_FjHiE`Hi`AjbBub@hu@QVQd@oQ`[i_@lp@uQv[oLjSwUjb@kGxKaK`PqFlJoDpGkg@|{@gIpNmDpF_H`K}m@tcAij@x~@mQlZsE`HaGzIkd@pv@yXfe@gJhOaGzI}DpFgG~HkGjHgEtEetB|xBgCdCmbAdeAaGfGwHpH_bA`eAgHjIoGfIgGpIyGfKsFhJwFjKwElJuFhMiEpKkEtLuCxIyUfw@}DzNkOtl@yBfJcDpOuCrO}BfNcC~PiJhu@{Ixs@}@rFaApEeApD_GpQaBdE{A~Cke@~y@aFbIcFfHwEfGeHfIaGfGig@lf@_OlOuPdPwMvLas@~q@qFxFcGfHeG|HoGbJoFrI_FvIoFlK}EpKeOj^{AzCcBnCmClDuBxBoC|BaC~AeQtJ{DhCuDvC}CpC{GnG_BpAeAl@{Al@wA\\gBRcCFo]E{OKQCmNGiZAiHLkH^wGl@}Ft@aHnAaGtA{HzBmFlB}GrCoFlCoXtOe\\fReEnCkF`EoD|CeFbFiF~F}D|EyExGeEtGoDlGqDfHuCrGiN`]{CrGgDjG}DnG}QzWmEnFgClCwCrCeFfE_ErC_E`CwE~BqCnAsCdA}DlAq_@`JkS|E}TjFgLtCaAP_TfFmSxEgMrCmJ~BmGnAcDd@uIxAyEf@mABOKmAGeAUmCgAaAOm@@_ANiAl@MRaEnBqA^a@FiCL_FV_BAyA[s@a@m@q@]s@Wy@OgACeA@u@EQv@qKNyGFmBLqA\\mBrCuK|@sEj@}Dd@}ETaEHeE?aFIaEqAk[KoFCgGJeG^yIrCc^PoEFaFE}EQwE_@sEo@cFm@gD}@}DcAgDqAsDiFiMq@oBk@uBm@wCe@kDY_DOcDEsCBoDJ{CrBkZd@aFp@aFbAcF|EeS~ByJlAaGl@cEr@yFl@yHT{FJgG?{GOuGSuEi@{Go@{F}@uFiAuF}@uD{AeFmAiDcBeEwBsEkBeDeBqCmCuDeD{D{D_Ekx@cw@{EgFwBgCwD_FiCwDsRwZwCeEcEgFkE{EqEkEwE_EsF_EkDyBkFwCyDkBoF{BeeBsl@}D}AmHkDwC}AgGsDcFmDqFeEiFuEoEmEyFoGkEsFcFkHmDyFaDwFqCsFuCoGeDiIkCqHoBkG{BiIkB}HyHc_@qJ{d@kB_I}BoIoCyIkDmJuCkHuCqGaDoGyDaH}E}HcE}Fie@sn@kHkJ{EoFaE_E}YeWcE_EoCwCcEcF_C_DsB{CcS{[aDuEgRuUwRaVwD}DkPmOwCaD_CyCiCyD_CaEqL}UuOo[mBwEcB_FyAgFiLsb@cBiFiB{EuBqEuB_EsCqE{P_VKGei@iu@{DyEmCwCaC{BoD}CoEaD_EgC}DuBoEqB{EgBqxC{{@{DyAcEkBoDqBkD{BwDwCoDcDwByB}CsDcDmE{fAcdB}BeEeBuDeBkE{AoEwAeFeAoEaAqFw@uF_DsZs@sGc@yCiAgGmAkFs@oCmB_GwBoFq|A{sDwCgGsCmF}CiFyDsF{EgGwDgE_E_E_EmD}D}C}EiDeq@sa@cFoDaFeEkEgEeGcHwEsGsg@iv@uDqGiDuG_Tac@{CmFqDsFmDyEsDeEgEeEiCyBaDaCuCoBqEiCeDcBwEoB}E_BcCq@oEcAoF{@gFi@iFYeDG}E?_ELkF\\wGt@gHjAkGrAkGdB_V`I}Bn@{Cj@iD^cDJcDA{COoDe@kUoE_Eg@oDQ_F?qDNwEf@yDp@g_ApU{Dr@wCZgER_E@iWUUU_KWeAQiAa@iAu@}AcB_CwCgAuAQO_@S{@i@k@SoAWaACaAD_AP}@\\y@h@s@p@aApAq@tAk@`B_@fBQhBGtBBnBPrBZfBl@xB`ClGZjATvAH`BClDCfBLd@{@lSWbIiAvXQpE]tEm@|Ew@xD_AfDiA`DyA|CgBtCqBdC{BxB_CfBcIjFu@t@m@~@g@dA[~@YzAObBCtAHnBj@tH@pBGtAOnAYlA_@hAi@bAo@z@u@p@y@f@{@ZmB\\iFt@}FjA}GdBwGpAwFj@mGd@qBTqAXiBt@oHvDaBdAc@\\gBdBQTeBtCaA|BmBpGc@z@m@z@w@p@_E~BaD`BcC~@oBf@SGcBLyEj@_@A_@QOYQcAGSQaE]yAWo@wE}IOIm@kAE[w@sAQGkBqDCUkAqCoBaESD}@b@wEAqAAoBPgDh@fDi@nBQ`EBj@?CaBEWa@uAAe@Da@NYNMn@OhEBbBOv@UlDcBnAo@nA]h\\yExMoB~l@mIhT{C`CS~Ic@jAShBu@zCsAlAWnJwAf@Uh@c@`@o@Tu@LeAZqEZcB`@iAh@aA|EuGBi@pBeD|A_DdAqCz@wCx@wDl@_E`@mE\\qFn@wQtA{\\lCgq@LaH?mFKcGW{G_Eql@kDoh@MwC?mCHcCjAaOHuCCkDK}B]}Ca@}Bo@aCw@yBcBiDoYsh@}H{NsBsEsBqFyA{EoAyEgAmF_QobA{@sEoCaPuMev@}C{Q{BoMs@oFi@gG[}EQ{GC_HH_HX{G^oFz@_IjQkyAvDm[tBmQ`AoGf@yCNMVy@d@y@V]zIyGj@q@h@cATw@r@oDCg@`AqDhCaLAm@r@gDlGyWX}ALkB@kBGeBUgBa@aBo@aBq@kA{@cAgA{@iAi@qA]wF}@Q?kF}@{@]_Ao@u@y@wPwWaA{AUCiNgUmbD{lFsEiImDkHmaAmtBkDsGuDgGyDuFiDoE{DoEeEgEkE{DuEqDkFmDoF_D{FsCqD{A}FsBox@cUag@mNgMaEorBar@eH_CeJcDq`Bki@}w@}YeIkCgJkCyI{ByK{CcGmBgdE}wAaPeF_oF{`BmVyGud@wLsImCyHwCkNgGgIaEiKyFqKuGmIuFon@sd@}t@if@gGqDyJeF_fB{{@m\\uPw_@eSsDkBiKwFqCkBaQmMiPoKgU}NgFuDiFiEmFcFoFyFu~C}qDqE{F_E}FyDgGaEmHyD}HgDwHqCoHiCwHgCyImUoy@aHmUsCoIgBwEeBcEmDgHiEcIqJkP{NqV_D{FsDwHyDcJeCwGsBmGcCkImAyEkD{O}A}HuA}HmAwI}@{H_AkLgB}W_A}NgDoc@w@cIqAsKq@qEuAeIwAmHeCkKmBeHsBuG}B}GyBwFaCwFeDcHa\\gn@}EoIuCqEqEkGcDeE{EqFoFqFkcBk}AgI_HgJcHsJqGsKmGea@iU{W}MyIkFePsJcdBg|@i_A}e@_TqKaa@iT{`A{f@mFaCeJ{DqCyAoCmBoB_BkBmBoCgDeCuDeAmByXgn@eBmDeBuCyBuCiBqB}BuBcCgB}^wT}EeDwFmEoFyEor@io@sDaDyDqCcLgHanA{u@wa@iXaIuEsC{AK[_FsCqLqFeAaAwDaEMKIQgCoB{DiCa@m@So@C{@NmA~@oEbBwGL]@YrHwS~@{CrAoFpDcOrBsJxZozA~L_m@jRg~@~@oDhA}CvAwC`BmC|NqR~@yAx@oBf@}Af@aCZmCNwC@uBGwC[sDi@gDq@gDgA{DoAqDsA}CeBgDmB{CgCgD}JcKkWyWcC{CmByCgBeD{AoDwAaEiAiE_E{R}@eDoAsDqA{CaB{C{BeDyBiCkLgLcAmAqAoBm@iAuC_HaBiEy@mBsBuDwDyI{DoJu@yAw@kAaAeAgAy@iB_AsAc@kB]mBMoBD}ATi@NwGvCkD|AqBh@iBTkBBsCMkC]_Dq@yw@}RcBi@yAs@qAaAq@y@a@{@Su@O}@IsA?cBL_Hj@}M^aFPwEj@iOAO?y@p@gNJcEFq@FoAVyBlBiLjAsGJqADgCnA{[NkCdBoSPsClDy_@fBq[Lo@XkAb@cAj@aAdBmCtEsHdAoAn@q@~CyERS\\Il@@^HXTN\\Ln@B\\@jAL`@TZ`@N^AVOV_@Hi@Ag@G[MUIGC[W[AW?O|KjA`BTdAHbI~FhI`GbB{ERe@rCeIrBbBPYt@mB",
      },
    },
  ],
};
