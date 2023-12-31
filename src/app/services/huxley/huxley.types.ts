type FilterType = 'to' | 'from';

export type Board = 'departures' | 'arrivals' | 'all' | 'next' | 'fastest';
export type Filter = { filterType: FilterType; destinationStation: CRS };
export type CRS =
  | 'ABW'
  | 'ABE'
  | 'ACY'
  | 'ABA'
  | 'ABD'
  | 'AUR'
  | 'AVY'
  | 'ABH'
  | 'AGV'
  | 'AGL'
  | 'AYW'
  | 'XAE'
  | 'ACR'
  | 'AAT'
  | 'ACN'
  | 'ACH'
  | 'ACK'
  | 'ACL'
  | 'ACG'
  | 'ACB'
  | 'ACC'
  | 'AML'
  | 'ADD'
  | 'ADW'
  | 'ASN'
  | 'ADM'
  | 'ADC'
  | 'ADL'
  | 'AWK'
  | 'AIG'
  | 'ANS'
  | 'AIN'
  | 'AIR'
  | 'ADR'
  | 'AYP'
  | 'ALB'
  | 'ALD'
  | 'AMT'
  | 'AHT'
  | 'AGT'
  | 'AAP'
  | 'AXP'
  | 'ALX'
  | 'ALF'
  | 'ALW'
  | 'ALO'
  | 'ASS'
  | 'ALM'
  | 'ALR'
  | 'ASG'
  | 'ALN'
  | 'ALP'
  | 'ABC'
  | 'AON'
  | 'ATW'
  | 'ALT'
  | 'ALV'
  | 'AMB'
  | 'AMY'
  | 'AMR'
  | 'AMF'
  | 'AMD'
  | 'AMS'
  | 'ANC'
  | 'AND'
  | 'ADV'
  | 'ANZ'
  | 'AGR'
  | 'ANG'
  | 'ANN'
  | 'ANL'
  | 'AFV'
  | 'APY'
  | 'APP'
  | 'APD'
  | 'APF'
  | 'APB'
  | 'APS'
  | 'ARB'
  | 'ARD'
  | 'AUI'
  | 'ADS'
  | 'ASB'
  | 'ADN'
  | 'ADK'
  | 'AGS'
  | 'ARG'
  | 'ARL'
  | 'ARM'
  | 'ARA'
  | 'AWT'
  | 'ARN'
  | 'ARR'
  | 'ART'
  | 'ARU'
  | 'ACT'
  | 'AUW'
  | 'ASH'
  | 'AHV'
  | 'ABY'
  | 'ASC'
  | 'ASF'
  | 'AFS'
  | 'AFK'
  | 'ASY'
  | 'AHD'
  | 'AHN'
  | 'AHS'
  | 'ANF'
  | 'AWM'
  | 'ASK'
  | 'ALK'
  | 'ASP'
  | 'APG'
  | 'AST'
  | 'ATH'
  | 'ATN'
  | 'ATT'
  | 'ATB'
  | 'ATE'
  | 'ATL'
  | 'AUK'
  | 'AUD'
  | 'AUG'
  | 'XAF'
  | 'AVM'
  | 'AVI'
  | 'AVF'
  | 'AVN'
  | 'AXM'
  | 'AYS'
  | 'AVP'
  | 'AYL'
  | 'AYH'
  | 'AYR'
  | 'BAC'
  | 'BAJ'
  | 'BAG'
  | 'BLD'
  | 'BIO'
  | 'ZBS'
  | 'BKZ'
  | 'BAB'
  | 'BDK'
  | 'BAL'
  | 'BHC'
  | 'BSI'
  | 'BMB'
  | 'BAM'
  | 'BNV'
  | 'BAN'
  | 'BNG'
  | 'BAH'
  | 'BAD'
  | 'BSS'
  | 'ZBB'
  | 'BLL'
  | 'BAR'
  | 'BGI'
  | 'BGD'
  | 'BKG'
  | 'BGV'
  | 'ZBK'
  | 'BRT'
  | 'BPL'
  | 'BMG'
  | 'BRM'
  | 'BNH'
  | 'BNS'
  | 'BNI'
  | 'BTB'
  | 'BAA'
  | 'BNL'
  | 'BNY'
  | 'BNX'
  | 'BNP'
  | 'BTG'
  | 'ZBC'
  | 'BRR'
  | 'BRL'
  | 'BAV'
  | 'BIF'
  | 'BWS'
  | 'BRY'
  | 'BYD'
  | 'BYI'
  | 'BYL'
  | 'BAU'
  | 'BSO'
  | 'BSK'
  | 'BBL'
  | 'XDO'
  | 'BTH'
  | 'BHG'
  | 'BTL'
  | 'BTT'
  | 'BAK'
  | 'BAT'
  | 'BLB'
  | 'BAY'
  | 'BCF'
  | 'BER'
  | 'BRN'
  | 'BSD'
  | 'BSL'
  | 'BEU'
  | 'BEL'
  | 'BEB'
  | 'BCC'
  | 'BEC'
  | 'BKJ'
  | 'BDM'
  | 'XDW'
  | 'BSJ'
  | 'BDH'
  | 'BMT'
  | 'BEH'
  | 'BDW'
  | 'BEE'
  | 'BKS'
  | 'BFQ'
  | 'BFA'
  | 'BLV'
  | 'BLG'
  | 'BGM'
  | 'BLH'
  | 'BLM'
  | 'BLP'
  | 'BEG'
  | 'BVD'
  | 'BEM'
  | 'BEY'
  | 'BEF'
  | 'BEN'
  | 'BTY'
  | 'BYK'
  | 'BNO'
  | 'BAS'
  | 'BFE'
  | 'BKM'
  | 'BKW'
  | 'BEP'
  | 'BYA'
  | 'BBW'
  | 'BRS'
  | 'BRK'
  | 'BWK'
  | 'BES'
  | 'BSC'
  | 'BTO'
  | 'BET'
  | 'BYC'
  | 'BEV'
  | 'BEX'
  | 'BXY'
  | 'BXH'
  | 'XEZ'
  | 'BCS'
  | 'BIT'
  | 'BKL'
  | 'BID'
  | 'BIW'
  | 'BBK'
  | 'BIC'
  | 'BIL'
  | 'BIG'
  | 'BIN'
  | 'BIY'
  | 'BCG'
  | 'BCH'
  | 'BWD'
  | 'BIK'
  | 'BDL'
  | 'BKC'
  | 'BKN'
  | 'BKP'
  | 'XFG'
  | 'BHI'
  | 'BMO'
  | 'XNE'
  | 'BHM'
  | 'BSW'
  | 'BIA'
  | 'BBG'
  | 'BIB'
  | 'XLU'
  | 'BIS'
  | 'BIP'
  | 'BPT'
  | 'BTE'
  | 'BBN'
  | 'BKH'
  | 'BHO'
  | 'BPN'
  | 'BPB'
  | 'BPS'
  | 'BKR'
  | 'BLK'
  | 'BAW'
  | 'XKW'
  | 'BFF'
  | 'BLA'
  | 'BAI'
  | 'BKT'
  | 'BKD'
  | 'BLT'
  | 'BLO'
  | 'BSB'
  | 'BLY'
  | 'BLX'
  | 'BWN'
  | 'BLN'
  | 'BYB'
  | 'BGR'
  | 'BOD'
  | 'BDF'
  | 'BOR'
  | 'BOG'
  | 'BGS'
  | 'BON'
  | 'BTD'
  | 'BDS'
  | 'BKA'
  | 'BOC'
  | 'BNW'
  | 'BOT'
  | 'BBS'
  | 'BDZ'
  | 'BRG'
  | 'BRH'
  | 'BOH'
  | 'BSN'
  | 'BOE'
  | 'BTF'
  | 'XIB'
  | 'BNE'
  | 'BMH'
  | 'BHA'
  | 'BRV'
  | 'BWB'
  | 'BOW'
  | 'BOP'
  | 'BWG'
  | 'BXW'
  | 'BCE'
  | 'BDQ'
  | 'BDI'
  | 'BOA'
  | 'BDN'
  | 'BTR'
  | 'BTP'
  | 'BML'
  | 'BMY'
  | 'BLE'
  | 'BMP'
  | 'BRP'
  | 'BCN'
  | 'BND'
  | 'BSM'
  | 'BYS'
  | 'BEO'
  | 'BDY'
  | 'BRC'
  | 'BCZ'
  | 'BFD'
  | 'BRE'
  | 'BWO'
  | 'BEA'
  | 'BRO'
  | 'BGN'
  | 'BDG'
  | 'BWT'
  | 'BDT'
  | 'BRF'
  | 'BGG'
  | 'BGH'
  | 'BTN'
  | 'BMD'
  | 'BNT'
  | 'XPB'
  | 'BPW'
  | 'XDU'
  | 'BRI'
  | 'BHD'
  | 'RBS'
  | 'BNF'
  | 'BRX'
  | 'BGE'
  | 'BDB'
  | 'BSR'
  | 'BCU'
  | 'BHS'
  | 'BCY'
  | 'BNR'
  | 'BDC'
  | 'BOM'
  | 'BMR'
  | 'BMC'
  | 'BMN'
  | 'BMS'
  | 'BMV'
  | 'BSY'
  | 'BSP'
  | 'BPK'
  | 'BKO'
  | 'BME'
  | 'BMF'
  | 'BRA'
  | 'BUH'
  | 'BYF'
  | 'BXB'
  | 'BCV'
  | 'BDA'
  | 'BGA'
  | 'BSU'
  | 'BRW'
  | 'BXS'
  | 'BRU'
  | 'BYN'
  | 'BUC'
  | 'XEY'
  | 'BCK'
  | 'BUK'
  | 'BSV'
  | 'BUA'
  | 'BGL'
  | 'BHR'
  | 'BLW'
  | 'BUE'
  | 'BUG'
  | 'BUY'
  | 'BUW'
  | 'BNA'
  | 'BUD'
  | 'BNM'
  | 'BMK'
  | 'BUU'
  | 'BUB'
  | 'BNC'
  | 'BYM'
  | 'BUI'
  | 'BTS'
  | 'BCB'
  | 'BCJ'
  | 'BUO'
  | 'BUJ'
  | 'BUT'
  | 'BUR'
  | 'BSE'
  | 'BUS'
  | 'BHK'
  | 'BSH'
  | 'BUL'
  | 'BXD'
  | 'BUX'
  | 'BUZ'
  | 'BFN'
  | 'BYE'
  | 'CAD'
  | 'XKC'
  | 'CSQ'
  | 'CGW'
  | 'CPH'
  | 'CWS'
  | 'CRP'
  | 'FRH'
  | 'CAC'
  | 'CDT'
  | 'CIR'
  | 'XAH'
  | 'XAI'
  | 'CSK'
  | 'CDU'
  | 'CAM'
  | 'CBN'
  | 'CBG'
  | 'XEC'
  | 'CBH'
  | 'CMB'
  | 'CBL'
  | 'CMD'
  | 'CMO'
  | 'ZCW'
  | 'CWX'
  | 'CNL'
  | 'CNA'
  | 'CAO'
  | 'CNN'
  | 'CBE'
  | 'CBW'
  | 'CNY'
  | 'CPU'
  | 'CBB'
  | 'CAE'
  | 'CDD'
  | 'CDB'
  | 'CDF'
  | 'CCB'
  | 'XCF'
  | 'CDQ'
  | 'CDO'
  | 'CDR'
  | 'CRF'
  | 'CAK'
  | 'CAR'
  | 'CTO'
  | 'CLU'
  | 'CMN'
  | 'CML'
  | 'CNF'
  | 'CAN'
  | 'CAY'
  | 'CPK'
  | 'CAG'
  | 'CSH'
  | 'CSB'
  | 'CRS'
  | 'CDY'
  | 'CBP'
  | 'CLC'
  | 'CAQ'
  | 'CAX'
  | 'CTB'
  | 'CFD'
  | 'CAS'
  | 'CSM'
  | 'CAT'
  | 'CTF'
  | 'CFB'
  | 'CYS'
  | 'CCT'
  | 'CTL'
  | 'XGO'
  | 'CAZ'
  | 'CGT'
  | 'CAU'
  | 'CYB'
  | 'CTH'
  | 'CFH'
  | 'CFO'
  | 'CHW'
  | 'CFR'
  | 'CEF'
  | 'CLN'
  | 'CPN'
  | 'CWC'
  | 'CHG'
  | 'CHC'
  | 'CBY'
  | 'CTN'
  | 'CRT'
  | 'CSR'
  | 'CTE'
  | 'CTM'
  | 'CHT'
  | 'CHZ'
  | 'CHU'
  | 'CHE'
  | 'CED'
  | 'CEL'
  | 'CHM'
  | 'CLD'
  | 'CNM'
  | 'CPW'
  | 'CYT'
  | 'CHY'
  | 'CHN'
  | 'CSN'
  | 'CSS'
  | 'CTR'
  | 'CRD'
  | 'CLS'
  | 'CHD'
  | 'CSW'
  | 'CNO'
  | 'CCH'
  | 'CIL'
  | 'CHL'
  | 'CHI'
  | 'CLY'
  | 'XCQ'
  | 'CPM'
  | 'XDM'
  | 'XDN'
  | 'CPG'
  | 'CHP'
  | 'CRK'
  | 'CIT'
  | 'CHK'
  | 'CHO'
  | 'CRL'
  | 'CLW'
  | 'CHR'
  | 'CHH'
  | 'CTW'
  | 'CHF'
  | 'CTT'
  | 'CIM'
  | 'CTK'
  | 'CLT'
  | 'CLA'
  | 'CPY'
  | 'CLP'
  | 'CLJ'
  | 'CPT'
  | 'CLR'
  | 'CKS'
  | 'CLV'
  | 'CLG'
  | 'CLE'
  | 'CEA'
  | 'CLI'
  | 'CFN'
  | 'CLH'
  | 'CLK'
  | 'CUW'
  | 'CYK'
  | 'CBC'
  | 'CBS'
  | 'COA'
  | 'CSD'
  | 'COX'
  | 'ZCK'
  | 'CSL'
  | 'CGN'
  | 'COL'
  | 'CET'
  | 'CEH'
  | 'CLO'
  | 'CLM'
  | 'CLL'
  | 'CNE'
  | 'CYA'
  | 'CWL'
  | 'CWB'
  | 'CME'
  | 'COM'
  | 'CNG'
  | 'CNS'
  | 'CON'
  | 'CBD'
  | 'CEY'
  | 'CNP'
  | 'CNW'
  | 'COB'
  | 'COO'
  | 'CBR'
  | 'COE'
  | 'COP'
  | 'CRB'
  | 'COR'
  | 'CBZ'
  | 'CFC'
  | 'CKH'
  | 'CKL'
  | 'CPA'
  | 'CRR'
  | 'XAO'
  | 'COY'
  | 'CSY'
  | 'COS'
  | 'CSA'
  | 'CGM'
  | 'COT'
  | 'CDS'
  | 'CDN'
  | 'COV'
  | 'CAA'
  | 'CWN'
  | 'COW'
  | 'CRA'
  | 'CGD'
  | 'CRU'
  | 'CRM'
  | 'CBK'
  | 'CRV'
  | 'CRW'
  | 'CRY'
  | 'CDI'
  | 'CES'
  | 'CSG'
  | 'CWD'
  | 'CRE'
  | 'CKN'
  | 'CWH'
  | 'CNR'
  | 'CCC'
  | 'CIN'
  | 'CRI'
  | 'CFF'
  | 'CFT'
  | 'CMR'
  | 'CMF'
  | 'CKT'
  | 'CRG'
  | 'CFL'
  | 'COI'
  | 'CKY'
  | 'CMY'
  | 'CSO'
  | 'CRH'
  | 'COH'
  | 'CWU'
  | 'CWE'
  | 'CRN'
  | 'ZCO'
  | 'CRO'
  | 'CYP'
  | 'CUD'
  | 'CUF'
  | 'XAM'
  | 'CUM'
  | 'XDX'
  | 'CUA'
  | 'CUB'
  | 'CUL'
  | 'CUP'
  | 'CUH'
  | 'CUS'
  | 'CUX'
  | 'CMH'
  | 'CWM'
  | 'CYN'
  | 'DDK'
  | 'ZDE'
  | 'DSY'
  | 'DAG'
  | 'DAL'
  | 'DAK'
  | 'DAM'
  | 'DMR'
  | 'DLR'
  | 'DLY'
  | 'DLS'
  | 'DLJ'
  | 'DLK'
  | 'DLT'
  | 'DLW'
  | 'DNY'
  | 'DCT'
  | 'DZY'
  | 'DFZ'
  | 'DAR'
  | 'DAN'
  | 'DSM'
  | 'DFD'
  | 'XAP'
  | 'DRT'
  | 'DWN'
  | 'DAT'
  | 'DVN'
  | 'DWL'
  | 'DWW'
  | 'DEA'
  | 'DEN'
  | 'DNN'
  | 'DGT'
  | 'DGY'
  | 'DHN'
  | 'DLM'
  | 'DBD'
  | 'DNM'
  | 'DGC'
  | 'DMK'
  | 'DNT'
  | 'DTN'
  | 'DEP'
  | 'DBY'
  | 'DBR'
  | 'DEB'
  | 'DKR'
  | 'XAQ'
  | 'DPT'
  | 'DEW'
  | 'DID'
  | 'DIG'
  | 'DMH'
  | 'DNS'
  | 'DMG'
  | 'DGL'
  | 'DIN'
  | 'DND'
  | 'DTG'
  | 'DSL'
  | 'DIS'
  | 'DOC'
  | 'DOD'
  | 'DOL'
  | 'DLH'
  | 'DLG'
  | 'DWD'
  | 'DON'
  | 'DOZ'
  | 'DCH'
  | 'DCW'
  | 'DOR'
  | 'DKG'
  | 'DPD'
  | 'DKT'
  | 'DMS'
  | 'DDG'
  | 'DGS'
  | 'DVH'
  | 'DVP'
  | 'DVC'
  | 'DVY'
  | 'DOW'
  | 'DRG'
  | 'DYP'
  | 'DRM'
  | 'DRF'
  | 'DRI'
  | 'DTW'
  | 'DRO'
  | 'DMC'
  | 'DFR'
  | 'DRU'
  | 'DMY'
  | 'DFP'
  | 'DPS'
  | 'DUD'
  | 'DDP'
  | 'DFI'
  | 'DRN'
  | 'DST'
  | 'DUL'
  | 'DBC'
  | 'DBE'
  | 'DUM'
  | 'DMF'
  | 'DMP'
  | 'DLO'
  | 'DUN'
  | 'DBL'
  | 'DCG'
  | 'DEE'
  | 'DFL'
  | 'DFE'
  | 'DKD'
  | 'DNL'
  | 'DUO'
  | 'DNO'
  | 'DUU'
  | 'XAD'
  | 'XDY'
  | 'DOT'
  | 'DNG'
  | 'DHM'
  | 'DUR'
  | 'DYC'
  | 'DYF'
  | 'EAG'
  | 'EAL'
  | 'ZET'
  | 'ERL'
  | 'EAR'
  | 'EAD'
  | 'EAS'
  | 'ELD'
  | 'EWD'
  | 'EBL'
  | 'ECR'
  | 'EDY'
  | 'EDW'
  | 'EFL'
  | 'EGF'
  | 'EGR'
  | 'EKL'
  | 'ELT'
  | 'EML'
  | 'EMA'
  | 'EMD'
  | 'ETL'
  | 'EWR'
  | 'EBN'
  | 'EBK'
  | 'EST'
  | 'ERA'
  | 'ESL'
  | 'EGN'
  | 'EBD'
  | 'EBV'
  | 'EBB'
  | 'ECC'
  | 'ECS'
  | 'ECL'
  | 'EDL'
  | 'EDZ'
  | 'EDN'
  | 'XFJ'
  | 'EBR'
  | 'EBT'
  | 'EDG'
  | 'EDB'
  | 'EDA'
  | 'EBS'
  | 'EGY'
  | 'EDP'
  | 'EDR'
  | 'EFF'
  | 'EGG'
  | 'EGH'
  | 'EGT'
  | 'EIG'
  | 'EPH'
  | 'ZEL'
  | 'ELG'
  | 'ELP'
  | 'ELE'
  | 'ESD'
  | 'ESW'
  | 'ELR'
  | 'ESM'
  | 'ELS'
  | 'ELW'
  | 'ELO'
  | 'ELY'
  | 'EMP'
  | 'EMS'
  | 'ECP'
  | 'ENC'
  | 'ENL'
  | 'ENF'
  | 'ENT'
  | 'EPS'
  | 'EPD'
  | 'ERD'
  | 'ERI'
  | 'ERH'
  | 'ESH'
  | 'EKB'
  | 'EXR'
  | 'ETC'
  | 'EBA'
  | 'EVE'
  | 'EWE'
  | 'EWW'
  | 'XXT'
  | 'EXC'
  | 'EXD'
  | 'EXT'
  | 'EXG'
  | 'EXM'
  | 'EXN'
  | 'EYN'
  | 'EYM'
  | 'FLS'
  | 'FRB'
  | 'FRF'
  | 'FRL'
  | 'FRW'
  | 'FCN'
  | 'FKG'
  | 'FKK'
  | 'FOC'
  | 'FMR'
  | 'FAL'
  | 'FMT'
  | 'FRM'
  | 'FNB'
  | 'FNN'
  | 'FNC'
  | 'FNH'
  | 'FNR'
  | 'FNW'
  | 'ZFD'
  | 'FLD'
  | 'FAV'
  | 'FGT'
  | 'FAZ'
  | 'FRN'
  | 'FEA'
  | 'FLX'
  | 'FEG'
  | 'FEL'
  | 'FNT'
  | 'FEN'
  | 'FER'
  | 'FRY'
  | 'FYS'
  | 'FFA'
  | 'FIL'
  | 'FIT'
  | 'FNY'
  | 'FPK'
  | 'FIN'
  | 'FSB'
  | 'FSG'
  | 'FGW'
  | 'FGH'
  | 'FSK'
  | 'FIZ'
  | 'FZW'
  | 'FWY'
  | 'FLZ'
  | 'FLE'
  | 'FLM'
  | 'FLN'
  | 'FLT'
  | 'FLI'
  | 'FLF'
  | 'FKC'
  | 'FKH'
  | 'FKW'
  | 'FOD'
  | 'FOG'
  | 'FOH'
  | 'FBY'
  | 'FOR'
  | 'FRS'
  | 'FTM'
  | 'FTW'
  | 'FOK'
  | 'XAS'
  | 'FOX'
  | 'FXN'
  | 'FRT'
  | 'FTN'
  | 'FRE'
  | 'FFD'
  | 'FML'
  | 'FRI'
  | 'FZH'
  | 'FRD'
  | 'FRO'
  | 'XAU'
  | 'FLW'
  | 'FNV'
  | 'FZP'
  | 'GNB'
  | 'GBL'
  | 'GAL'
  | 'XAA'
  | 'GCH'
  | 'GRF'
  | 'GGV'
  | 'GAR'
  | 'GRS'
  | 'GSD'
  | 'GSN'
  | 'GSW'
  | 'GRH'
  | 'GMG'
  | 'GTH'
  | 'GVE'
  | 'GST'
  | 'GTY'
  | 'GTW'
  | 'GGJ'
  | 'GER'
  | 'GDP'
  | 'GFN'
  | 'GIG'
  | 'GBD'
  | 'GFF'
  | 'GIL'
  | 'GLM'
  | 'GSC'
  | 'GIP'
  | 'GIR'
  | 'GLS'
  | 'GCW'
  | 'GGT'
  | 'GLC'
  | 'GLQ'
  | 'GLH'
  | 'XEA'
  | 'GLZ'
  | 'GLE'
  | 'GLF'
  | 'GLG'
  | 'GLT'
  | 'GLO'
  | 'GCR'
  | 'GLY'
  | 'XGZ'
  | 'GOB'
  | 'GOD'
  | 'GDL'
  | 'GDN'
  | 'GOE'
  | 'GOZ'
  | 'GOF'
  | 'GOL'
  | 'GOM'
  | 'GMY'
  | 'GOO'
  | 'GTR'
  | 'GDH'
  | 'GBG'
  | 'GOR'
  | 'GBS'
  | 'GTO'
  | 'GPO'
  | 'GRK'
  | 'GXX'
  | 'GWN'
  | 'GOX'
  | 'GPK'
  | 'GOS'
  | 'GGM'
  | 'GTN'
  | 'GRA'
  | 'GRT'
  | 'GVH'
  | 'GRV'
  | 'GRY'
  | 'GTA'
  | 'GRB'
  | 'GRC'
  | 'GCT'
  | 'GMV'
  | 'GMN'
  | 'GYM'
  | 'GNL'
  | 'GNR'
  | 'GBK'
  | 'GRL'
  | 'GNF'
  | 'GFD'
  | 'GNH'
  | 'GKC'
  | 'GKW'
  | 'GNW'
  | 'GEA'
  | 'GMD'
  | 'GMB'
  | 'GRN'
  | 'GRO'
  | 'GMT'
  | 'GRP'
  | 'GUI'
  | 'GLD'
  | 'GSY'
  | 'GUN'
  | 'GSL'
  | 'GNT'
  | 'GWE'
  | 'GYP'
  | 'HAB'
  | 'HCB'
  | 'HKC'
  | 'HAC'
  | 'HKW'
  | 'HDM'
  | 'HAD'
  | 'HDF'
  | 'HDW'
  | 'HGF'
  | 'HGG'
  | 'HAG'
  | 'HMY'
  | 'HAL'
  | 'HAS'
  | 'HED'
  | 'HFX'
  | 'HLG'
  | 'HID'
  | 'HLR'
  | 'HAI'
  | 'HWH'
  | 'HMT'
  | 'HME'
  | 'HNC'
  | 'BKQ'
  | 'HNW'
  | 'ZHA'
  | 'HMM'
  | 'HMD'
  | 'HDH'
  | 'HMP'
  | 'HMC'
  | 'HMW'
  | 'HIA'
  | 'HSD'
  | 'HAM'
  | 'HND'
  | 'HTH'
  | 'HNY'
  | 'HAN'
  | 'HPN'
  | 'HRL'
  | 'HDN'
  | 'HRD'
  | 'HLN'
  | 'HWM'
  | 'HWN'
  | 'HRO'
  | 'HPD'
  | 'HRM'
  | 'HGY'
  | 'HRY'
  | 'HRR'
  | 'HGT'
  | 'HRW'
  | 'HOH'
  | 'HTF'
  | 'HBY'
  | 'HPL'
  | 'HTW'
  | 'HPQ'
  | 'HWC'
  | 'HSL'
  | 'HSK'
  | 'HGS'
  | 'HTE'
  | 'HAT'
  | 'HFS'
  | 'HAP'
  | 'HSG'
  | 'HTY'
  | 'HTN'
  | 'XHC'
  | 'HAV'
  | 'HVN'
  | 'HVF'
  | 'HWD'
  | 'HWB'
  | 'HWK'
  | 'HKH'
  | 'HWT'
  | 'HDB'
  | 'HYR'
  | 'HYS'
  | 'HAY'
  | 'HYL'
  | 'HYM'
  | 'HHE'
  | 'HAZ'
  | 'HCN'
  | 'HDY'
  | 'HDL'
  | 'HDG'
  | 'HLI'
  | 'HHL'
  | 'HLL'
  | 'HWO'
  | 'HXX'
  | 'HWA'
  | 'HWE'
  | 'HAF'
  | 'HWF'
  | 'HWV'
  | 'HWX'
  | 'HTR'
  | 'HTC'
  | 'HBD'
  | 'HEC'
  | 'HDE'
  | 'HNF'
  | 'HEI'
  | 'HLC'
  | 'HLU'
  | 'HLD'
  | 'HMS'
  | 'HSB'
  | 'XAV'
  | 'HML'
  | 'HEN'
  | 'HNG'
  | 'HNL'
  | 'HOT'
  | 'HEL'
  | 'HFD'
  | 'HNB'
  | 'HNH'
  | 'HER'
  | 'HFE'
  | 'HFN'
  | 'HES'
  | 'HSW'
  | 'HEV'
  | 'HEW'
  | 'HEZ'
  | 'HEX'
  | 'HYD'
  | 'HHB'
  | 'ZHB'
  | 'HIB'
  | 'HST'
  | 'HWY'
  | 'HGM'
  | 'HIP'
  | 'HIG'
  | 'HHY'
  | 'HTO'
  | 'HLB'
  | 'HLF'
  | 'HLE'
  | 'HLW'
  | 'HIL'
  | 'HLS'
  | 'HYW'
  | 'HNK'
  | 'HIN'
  | 'HNA'
  | 'XHW'
  | 'HIT'
  | 'HGR'
  | 'HOC'
  | 'HVH'
  | 'HBN'
  | 'HOD'
  | 'HCH'
  | 'HLM'
  | 'XEE'
  | 'HOL'
  | 'HHD'
  | 'HLY'
  | 'HMN'
  | 'HYB'
  | 'HON'
  | 'HOY'
  | 'HPA'
  | 'HOK'
  | 'HOO'
  | 'HOP'
  | 'HPE'
  | 'HPT'
  | 'HRE'
  | 'HOR'
  | 'HBP'
  | 'HRN'
  | 'HRS'
  | 'HRH'
  | 'HSY'
  | 'HIR'
  | 'HWI'
  | 'HSC'
  | 'HGN'
  | 'HOU'
  | 'HOV'
  | 'HXM'
  | 'HWW'
  | 'HOW'
  | 'HOZ'
  | 'HOX'
  | 'HYK'
  | 'HBB'
  | 'HKN'
  | 'HUD'
  | 'HUL'
  | 'HUU'
  | 'HUP'
  | 'HCT'
  | 'HGD'
  | 'HUB'
  | 'HUS'
  | 'HUN'
  | 'HNT'
  | 'HNX'
  | 'HSE'
  | 'HUR'
  | 'HUT'
  | 'HUY'
  | 'HYC'
  | 'HYT'
  | 'HYP'
  | 'HKM'
  | 'HCR'
  | 'HYN'
  | 'HYH'
  | 'HYZ'
  | 'IBM'
  | 'IBM'
  | 'IFI'
  | 'IFD'
  | 'ILN'
  | 'ILK'
  | 'IMW'
  | 'INC'
  | 'INE'
  | 'INT'
  | 'INS'
  | 'IGD'
  | 'ING'
  | 'INK'
  | 'INP'
  | 'INV'
  | 'IVA'
  | 'INH'
  | 'INR'
  | 'IPS'
  | 'IRL'
  | 'IRV'
  | 'ISL'
  | 'ISP'
  | 'IVR'
  | 'IVY'
  | 'JCH'
  | 'LVJ'
  | 'JEQ'
  | 'JOH'
  | 'JHN'
  | 'JOR'
  | 'KSL'
  | 'KSN'
  | 'KEI'
  | 'KEH'
  | 'KEL'
  | 'KVD'
  | 'KEM'
  | 'KMH'
  | 'KMP'
  | 'KMS'
  | 'KML'
  | 'KEN'
  | 'KNW'
  | 'KLY'
  | 'KNE'
  | 'KNS'
  | 'KNL'
  | 'KNR'
  | 'ZHS'
  | 'KPA'
  | 'KTH'
  | 'KTN'
  | 'KTW'
  | 'KNT'
  | 'KBK'
  | 'KWK'
  | 'KET'
  | 'KEZ'
  | 'KWB'
  | 'KWG'
  | 'KEY'
  | 'KYN'
  | 'KDB'
  | 'KID'
  | 'KDG'
  | 'KWL'
  | 'KBN'
  | 'KCG'
  | 'KLD'
  | 'KIL'
  | 'KGT'
  | 'KMK'
  | 'KLM'
  | 'KPT'
  | 'KWN'
  | 'KBC'
  | 'KGM'
  | 'KGH'
  | 'KGL'
  | 'KLN'
  | 'KLB'
  | 'KNN'
  | 'KGN'
  | 'KGP'
  | 'KGS'
  | 'XAW'
  | 'KGE'
  | 'KNG'
  | 'KWR'
  | 'KND'
  | 'KIN'
  | 'KIT'
  | 'KTR'
  | 'KBX'
  | 'KKS'
  | 'KIR'
  | 'KKB'
  | 'KSW'
  | 'KBF'
  | 'KDY'
  | 'KRK'
  | 'KKD'
  | 'KKM'
  | 'KKH'
  | 'KKN'
  | 'KLF'
  | 'KWD'
  | 'KTL'
  | 'KIV'
  | 'KVP'
  | 'KNA'
  | 'KBW'
  | 'KNI'
  | 'KCK'
  | 'KNO'
  | 'KNU'
  | 'KNF'
  | 'KYL'
  | 'KYK'
  | 'LDY'
  | 'LAD'
  | 'LAI'
  | 'LRG'
  | 'LKE'
  | 'LAK'
  | 'LAM'
  | 'LNK'
  | 'LAN'
  | 'LAC'
  | 'LAW'
  | 'LGB'
  | 'LHO'
  | 'LHL'
  | 'LNY'
  | 'LGG'
  | 'LGM'
  | 'LGS'
  | 'LGW'
  | 'LAG'
  | 'LAP'
  | 'LPW'
  | 'LBT'
  | 'LAR'
  | 'LRH'
  | 'LRN'
  | 'XAZ'
  | 'LAU'
  | 'LWH'
  | 'LAY'
  | 'LZB'
  | 'LEB'
  | 'LEG'
  | 'LEH'
  | 'LEA'
  | 'LHM'
  | 'LMS'
  | 'LSW'
  | 'LHD'
  | 'LED'
  | 'LEE'
  | 'LDS'
  | 'XLB'
  | 'XLD'
  | 'LZZ'
  | 'LEI'
  | 'LIH'
  | 'LES'
  | 'LBZ'
  | 'LEL'
  | 'LTS'
  | 'LEN'
  | 'LNZ'
  | 'LEO'
  | 'LET'
  | 'LEU'
  | 'LVM'
  | 'XLA'
  | 'LWS'
  | 'LEW'
  | 'LEY'
  | 'LEM'
  | 'LER'
  | 'LIC'
  | 'LTV'
  | 'LID'
  | 'LIU'
  | 'LHS'
  | 'LBS'
  | 'LCN'
  | 'LNF'
  | 'LFD'
  | 'LGD'
  | 'LIN'
  | 'LIP'
  | 'LSK'
  | 'LSM'
  | 'LIS'
  | 'LVT'
  | 'LTK'
  | 'LTT'
  | 'LTL'
  | 'LIT'
  | 'LVN'
  | 'LTP'
  | 'LVC'
  | 'LVS'
  | 'LIV'
  | 'LPY'
  | 'LSN'
  | 'LVG'
  | 'LLA'
  | 'LBR'
  | 'LLT'
  | 'LNB'
  | 'LLN'
  | 'LDN'
  | 'LLC'
  | 'LLL'
  | 'LLV'
  | 'LLO'
  | 'LLD'
  | 'LLJ'
  | 'LLI'
  | 'LLE'
  | 'LLF'
  | 'LPG'
  | 'LLG'
  | 'LLM'
  | 'LLH'
  | 'LGO'
  | 'LLR'
  | 'LTH'
  | 'LLS'
  | 'LWR'
  | 'LAS'
  | 'LWM'
  | 'LNR'
  | 'LNW'
  | 'LLW'
  | 'LLY'
  | 'LHA'
  | 'LHE'
  | 'LCL'
  | 'LCB'
  | 'LCS'
  | 'LCG'
  | 'LCC'
  | 'LCH'
  | 'LHW'
  | 'LOC'
  | 'LCK'
  | 'BFR'
  | 'LBG'
  | 'CST'
  | 'CHX'
  | 'EUS'
  | 'FST'
  | 'LOF'
  | 'KGX'
  | 'LST'
  | 'MYB'
  | 'PAD'
  | 'LRB'
  | 'LRD'
  | 'STP'
  | 'VIC'
  | 'WAT'
  | 'WAE'
  | 'LBK'
  | 'LGE'
  | 'LPR'
  | 'LGK'
  | 'LOB'
  | 'LNG'
  | 'LGF'
  | 'LND'
  | 'LPT'
  | 'LGN'
  | 'LOO'
  | 'LOT'
  | 'LTG'
  | 'LOH'
  | 'LOS'
  | 'LBO'
  | 'LGJ'
  | 'LMR'
  | 'LOW'
  | 'LSY'
  | 'LWT'
  | 'LUD'
  | 'LUT'
  | 'LUB'
  | 'LUA'
  | 'LTN'
  | 'LUX'
  | 'LYD'
  | 'LYE'
  | 'LYP'
  | 'LYT'
  | 'LYC'
  | 'LYM'
  | 'XBD'
  | 'LTM'
  | 'MAC'
  | 'MCN'
  | 'MST'
  | 'MEW'
  | 'MAG'
  | 'MNS'
  | 'MDN'
  | 'MAI'
  | 'MDB'
  | 'MDE'
  | 'MDW'
  | 'MAL'
  | 'MLG'
  | 'MLT'
  | 'MVL'
  | 'MIA'
  | 'MCO'
  | 'MAN'
  | 'MUF'
  | 'MCV'
  | 'MNE'
  | 'MNG'
  | 'MNP'
  | 'MNR'
  | 'MRB'
  | 'MAS'
  | 'MRM'
  | 'MFT'
  | 'MSW'
  | 'MCH'
  | 'MRN'
  | 'MAR'
  | 'MHR'
  | 'MKR'
  | 'MNC'
  | 'MKT'
  | 'XBH'
  | 'MLW'
  | 'MCK'
  | 'MPL'
  | 'MSN'
  | 'MSC'
  | 'MSK'
  | 'MGN'
  | 'MTM'
  | 'MAO'
  | 'MTO'
  | 'MYH'
  | 'MYL'
  | 'MRY'
  | 'MAT'
  | 'MTB'
  | 'MAU'
  | 'MAX'
  | 'MAY'
  | 'MZH'
  | 'MHS'
  | 'MEL'
  | 'MKM'
  | 'XBO'
  | 'MLS'
  | 'MES'
  | 'MMO'
  | 'MEN'
  | 'MNN'
  | 'MEO'
  | 'MEC'
  | 'MEP'
  | 'MRW'
  | 'MEY'
  | 'MHM'
  | 'MER'
  | 'MEV'
  | 'MGM'
  | 'MCE'
  | 'XEF'
  | 'MEX'
  | 'MIC'
  | 'MIK'
  | 'MBR'
  | 'MDL'
  | 'MDG'
  | 'XBR'
  | 'MLF'
  | 'MFH'
  | 'MLH'
  | 'MIL'
  | 'MLB'
  | 'MBK'
  | 'MIF'
  | 'MIN'
  | 'MLM'
  | 'MIH'
  | 'MLN'
  | 'MLR'
  | 'MKC'
  | 'MHD'
  | 'XBW'
  | 'XBV'
  | 'MFF'
  | 'MSR'
  | 'MIR'
  | 'MIS'
  | 'MTC'
  | 'MIJ'
  | 'MOB'
  | 'MON'
  | 'MRS'
  | 'MTP'
  | 'MTS'
  | 'MRF'
  | 'MOG'
  | 'MSD'
  | 'MRP'
  | 'MRR'
  | 'MRD'
  | 'MDS'
  | 'MCM'
  | 'MTN'
  | 'MRT'
  | 'MIM'
  | 'XEK'
  | 'MFA'
  | 'MLY'
  | 'MPT'
  | 'MOR'
  | 'MTL'
  | 'MSS'
  | 'MOS'
  | 'MSL'
  | 'MSH'
  | 'MPK'
  | 'MSO'
  | 'MTH'
  | 'MOT'
  | 'MTG'
  | 'DBG'
  | 'MLD'
  | 'MCB'
  | 'MFL'
  | 'MTV'
  | 'MTA'
  | 'MUK'
  | 'MOO'
  | 'MUI'
  | 'MUB'
  | 'MYT'
  | 'NFN'
  | 'NLS'
  | 'NRN'
  | 'NAN'
  | 'NAR'
  | 'NBR'
  | 'NVR'
  | 'NTH'
  | 'NMT'
  | 'NEI'
  | 'NEL'
  | 'NES'
  | 'NET'
  | 'NRT'
  | 'NTL'
  | 'NBA'
  | 'NBC'
  | 'NBN'
  | 'NCE'
  | 'NWX'
  | 'NXG'
  | 'NCK'
  | 'NEH'
  | 'NHY'
  | 'NHL'
  | 'NHE'
  | 'NLN'
  | 'NEM'
  | 'NMC'
  | 'NMN'
  | 'NWM'
  | 'NPD'
  | 'NSG'
  | 'NCT'
  | 'NNG'
  | 'NBE'
  | 'NBY'
  | 'ZNP'
  | 'NRC'
  | 'NCL'
  | 'APN'
  | 'NCZ'
  | 'NCO'
  | 'NEW'
  | 'NVH'
  | 'NVM'
  | 'NVN'
  | 'NGT'
  | 'NMK'
  | 'NWE'
  | 'NWP'
  | 'NQY'
  | 'NSD'
  | 'NTN'
  | 'NTA'
  | 'NAY'
  | 'NWN'
  | 'NTC'
  | 'NLW'
  | 'NOA'
  | 'NEG'
  | 'NWR'
  | 'NWT'
  | 'NNP'
  | 'NIT'
  | 'NBT'
  | 'NRB'
  | 'NSB'
  | 'NOR'
  | 'NBW'
  | 'NCM'
  | 'NDL'
  | 'NFA'
  | 'NLR'
  | 'NQU'
  | 'NRD'
  | 'NSH'
  | 'NWA'
  | 'NWB'
  | 'NTR'
  | 'NMP'
  | 'NFD'
  | 'NFL'
  | 'NLT'
  | 'NUM'
  | 'NWI'
  | 'NTB'
  | 'NBS'
  | 'NRW'
  | 'NWD'
  | 'NOT'
  | 'NUN'
  | 'NHD'
  | 'NUR'
  | 'NNT'
  | 'NUT'
  | 'NUF'
  | 'XET'
  | 'OKN'
  | 'OKM'
  | 'OKL'
  | 'ZOA'
  | 'OBN'
  | 'OCK'
  | 'OLY'
  | 'OKE'
  | 'XCG'
  | 'OHL'
  | 'ORN'
  | 'OLD'
  | 'OLF'
  | 'OLM'
  | 'OLW'
  | 'OLT'
  | 'ORE'
  | 'OMS'
  | 'ORP'
  | 'ORR'
  | 'OPK'
  | 'OTF'
  | 'OTL'
  | 'OUN'
  | 'OUS'
  | 'OUD'
  | 'OUT'
  | 'OVE'
  | 'OVR'
  | 'OXN'
  | 'XOB'
  | 'OXF'
  | 'OXP'
  | 'OXS'
  | 'OXT'
  | 'PDW'
  | 'PDG'
  | 'PDT'
  | 'PGN'
  | 'PCN'
  | 'PYG'
  | 'PYJ'
  | 'PAI'
  | 'PAL'
  | 'PAN'
  | 'PNL'
  | 'PTF'
  | 'PAR'
  | 'XDR'
  | 'PBL'
  | 'PBN'
  | 'CIC'
  | 'PKT'
  | 'PAQ'
  | 'PKS'
  | 'PSN'
  | 'PTK'
  | 'PRN'
  | 'PWY'
  | 'PAT'
  | 'PTT'
  | 'PEA'
  | 'PMR'
  | 'PBS'
  | 'PEG'
  | 'PAW'
  | 'PEM'
  | 'PBY'
  | 'PMB'
  | 'PMD'
  | 'PDK'
  | 'PNY'
  | 'PNA'
  | 'PEN'
  | 'PCD'
  | 'PGM'
  | 'PNE'
  | 'PNW'
  | 'PHG'
  | 'PNS'
  | 'PKG'
  | 'PMW'
  | 'PNM'
  | 'PER'
  | 'PRH'
  | 'PNR'
  | 'PYN'
  | 'PES'
  | 'PHR'
  | 'PTB'
  | 'PNC'
  | 'PNF'
  | 'XPZ'
  | 'PNZ'
  | 'XCL'
  | 'PRW'
  | 'PRY'
  | 'PSH'
  | 'PTH'
  | 'PBO'
  | 'PBU'
  | 'PTR'
  | 'PET'
  | 'PEV'
  | 'PEB'
  | 'PEW'
  | 'ZPC'
  | 'XPK'
  | 'PIZ'
  | 'PIL'
  | 'PIN'
  | 'PIT'
  | 'PSE'
  | 'ZPS'
  | 'PLS'
  | 'PLK'
  | 'PLC'
  | 'PLM'
  | 'PMP'
  | 'PLU'
  | 'PLY'
  | 'XDJ'
  | 'POK'
  | 'PLG'
  | 'PSW'
  | 'PWE'
  | 'PWW'
  | 'PLE'
  | 'PLW'
  | 'PMT'
  | 'POL'
  | 'PON'
  | 'PYP'
  | 'PTD'
  | 'PFR'
  | 'PFM'
  | 'POT'
  | 'PLT'
  | 'PYC'
  | 'PPL'
  | 'PPD'
  | 'POO'
  | 'POP'
  | 'PTG'
  | 'PSL'
  | 'PTA'
  | 'PTC'
  | 'POR'
  | 'XEO'
  | 'PTM'
  | 'PMG'
  | 'PLN'
  | 'PLD'
  | 'PMS'
  | 'PMA'
  | 'PMH'
  | 'PPK'
  | 'PBR'
  | 'PFY'
  | 'PYT'
  | 'PRS'
  | 'PSC'
  | 'PRT'
  | 'PRB'
  | 'PRE'
  | 'XPT'
  | 'PRP'
  | 'PST'
  | 'PWC'
  | 'PRA'
  | 'PTW'
  | 'PTL'
  | 'PRR'
  | 'XPF'
  | 'PRL'
  | 'SIR'
  | 'PRU'
  | 'PUL'
  | 'PFL'
  | 'PUR'
  | 'PUO'
  | 'PUT'
  | 'PWL'
  | 'PYE'
  | 'PYL'
  | 'QRD'
  | 'QYD'
  | 'QBR'
  | 'QPK'
  | 'QPW'
  | 'QRP'
  | 'QRB'
  | 'QUI'
  | 'RDF'
  | 'RCF'
  | 'RDT'
  | 'RAD'
  | 'XEQ'
  | 'RDR'
  | 'RNF'
  | 'RNM'
  | 'RAI'
  | 'RNH'
  | 'RAM'
  | 'RMG'
  | 'RGW'
  | 'RAN'
  | 'RAU'
  | 'RAV'
  | 'RVB'
  | 'RVN'
  | 'RWC'
  | 'RLG'
  | 'RAY'
  | 'RDG'
  | 'RDW'
  | 'REC'
  | 'RDB'
  | 'RCC'
  | 'RCE'
  | 'RDN'
  | 'RDS'
  | 'RDC'
  | 'RDH'
  | 'RDA'
  | 'RED'
  | 'REE'
  | 'RHM'
  | 'REG'
  | 'REI'
  | 'RTN'
  | 'RSN'
  | 'RET'
  | 'RHG'
  | 'RHI'
  | 'RIA'
  | 'RHO'
  | 'RHU'
  | 'RHL'
  | 'RHY'
  | 'XTV'
  | 'RHD'
  | 'RIL'
  | 'RMD'
  | 'RMK'
  | 'RIC'
  | 'RDD'
  | 'RID'
  | 'RDM'
  | 'RCA'
  | 'RIS'
  | 'RBR'
  | 'RHA'
  | 'RRN'
  | 'ROB'
  | 'RCD'
  | 'ROC'
  | 'RTR'
  | 'RFD'
  | 'RFY'
  | 'ROG'
  | 'ROR'
  | 'ROL'
  | 'RMB'
  | 'RMF'
  | 'RML'
  | 'ROM'
  | 'REB'
  | 'ROO'
  | 'RSG'
  | 'RSH'
  | 'RSB'
  | 'ROS'
  | 'RMC'
  | 'ROE'
  | 'RTY'
  | 'RNR'
  | 'RLN'
  | 'ROW'
  | 'RYB'
  | 'RYN'
  | 'RYS'
  | 'RUA'
  | 'RUF'
  | 'RUG'
  | 'RGT'
  | 'RGL'
  | 'RUN'
  | 'RUE'
  | 'RKT'
  | 'RUS'
  | 'RUT'
  | 'RYD'
  | 'RYP'
  | 'RYR'
  | 'RRB'
  | 'RYE'
  | 'RYH'
  | 'SLE'
  | 'SFD'
  | 'SLD'
  | 'SAF'
  | 'SAH'
  | 'SAL'
  | 'SAE'
  | 'STS'
  | 'SLB'
  | 'SLT'
  | 'SAM'
  | 'SLW'
  | 'SMC'
  | 'SNA'
  | 'SDB'
  | 'SNR'
  | 'SDL'
  | 'SND'
  | 'SDG'
  | 'SAN'
  | 'SDP'
  | 'XSA'
  | 'SAD'
  | 'SDW'
  | 'SDY'
  | 'SNK'
  | 'SQH'
  | 'SRR'
  | 'SDF'
  | 'SDR'
  | 'SAW'
  | 'SXY'
  | 'SAX'
  | 'SCA'
  | 'SCT'
  | 'SCH'
  | 'SCB'
  | 'SCU'
  | 'SML'
  | 'SEB'
  | 'SEF'
  | 'SFL'
  | 'SEA'
  | 'SEM'
  | 'SSC'
  | 'SEC'
  | 'SSF'
  | 'SRG'
  | 'SBY'
  | 'SRS'
  | 'SKK'
  | 'SEL'
  | 'SEG'
  | 'SLY'
  | 'SET'
  | 'SVK'
  | 'SVS'
  | 'SEV'
  | 'SVB'
  | 'STJ'
  | 'SDE'
  | 'SWH'
  | 'SFR'
  | 'SHN'
  | 'SHA'
  | 'SFI'
  | 'SHW'
  | 'SHL'
  | 'SSS'
  | 'SHF'
  | 'SAI'
  | 'SHQ'
  | 'SED'
  | 'SNF'
  | 'SEN'
  | 'SPB'
  | 'SPH'
  | 'SPY'
  | 'SHP'
  | 'STH'
  | 'SHE'
  | 'SIE'
  | 'SHM'
  | 'SLS'
  | 'SDM'
  | 'SFN'
  | 'SHD'
  | 'SHI'
  | 'SHY'
  | 'SPP'
  | 'SIP'
  | 'SHB'
  | 'SHH'
  | 'SRO'
  | 'SRL'
  | 'SRY'
  | 'SHO'
  | 'SDC'
  | 'SEH'
  | 'SSE'
  | 'SRT'
  | 'SHT'
  | 'SHS'
  | 'SHR'
  | 'SID'
  | 'SIL'
  | 'SIC'
  | 'SLK'
  | 'SLV'
  | 'SVR'
  | 'SIN'
  | 'SIT'
  | 'SKG'
  | 'SKE'
  | 'SKI'
  | 'SGR'
  | 'SWT'
  | 'SLA'
  | 'SLR'
  | 'SLH'
  | 'SLO'
  | 'SMA'
  | 'SAB'
  | 'SGB'
  | 'SMR'
  | 'SMB'
  | 'SNI'
  | 'SDA'
  | 'SWO'
  | 'SOJ'
  | 'SOR'
  | 'SOL'
  | 'SYT'
  | 'SAT'
  | 'SBK'
  | 'SBM'
  | 'SCY'
  | 'SES'
  | 'SGH'
  | 'SGN'
  | 'SGL'
  | 'SOH'
  | 'SHZ'
  | 'SOK'
  | 'SMO'
  | 'SOM'
  | 'SRU'
  | 'STO'
  | 'SWS'
  | 'SOF'
  | 'STL'
  | 'SOA'
  | 'SOU'
  | 'XSN'
  | 'STQ'
  | 'XSK'
  | 'SOB'
  | 'SBU'
  | 'SEE'
  | 'SIA'
  | 'SOC'
  | 'SOE'
  | 'SOV'
  | 'SMN'
  | 'SOP'
  | 'SOZ'
  | 'SHV'
  | 'SLZ'
  | 'SWK'
  | 'SOW'
  | 'SPA'
  | 'SBR'
  | 'SPI'
  | 'SPO'
  | 'SPN'
  | 'SRI'
  | 'SPR'
  | 'SPF'
  | 'SQU'
  | 'SAC'
  | 'SAA'
  | 'SAO'
  | 'SAR'
  | 'SAS'
  | 'SAU'
  | 'SBS'
  | 'SBF'
  | 'SBV'
  | 'SCR'
  | 'SDN'
  | 'SER'
  | 'SGM'
  | 'SNH'
  | 'SHJ'
  | 'SIH'
  | 'SIV'
  | 'SJN'
  | 'SJS'
  | 'SJP'
  | 'SAJ'
  | 'SKN'
  | 'SLQ'
  | 'SMT'
  | 'SMG'
  | 'SMY'
  | 'STM'
  | 'SNO'
  | 'XEI'
  | 'STZ'
  | 'STI'
  | 'STA'
  | 'SNS'
  | 'SLL'
  | 'SYB'
  | 'SMD'
  | 'SMH'
  | 'SFO'
  | 'SNP'
  | 'SNT'
  | 'SSD'
  | 'XTH'
  | 'SST'
  | 'SPU'
  | 'SRD'
  | 'SBE'
  | 'SCS'
  | 'SVL'
  | 'SCF'
  | 'SON'
  | 'SPS'
  | 'SVG'
  | 'STV'
  | 'SWR'
  | 'STT'
  | 'STG'
  | 'SPT'
  | 'SKS'
  | 'SSM'
  | 'STK'
  | 'SKM'
  | 'SKW'
  | 'SOT'
  | 'SNE'
  | 'SCG'
  | 'SCN'
  | 'SGQ'
  | 'SBP'
  | 'SOG'
  | 'STN'
  | 'SHU'
  | 'SNL'
  | 'SOY'
  | 'SBJ'
  | 'SBT'
  | 'SOI'
  | 'SMK'
  | 'STR'
  | 'SWP'
  | 'SRA'
  | 'SFA'
  | 'STY'
  | 'SAV'
  | 'STC'
  | 'STW'
  | 'STE'
  | 'SRC'
  | 'SRH'
  | 'XCU'
  | 'SHC'
  | 'SRF'
  | 'SRN'
  | 'STF'
  | 'SOO'
  | 'STD'
  | 'STU'
  | 'SYA'
  | 'SUY'
  | 'SUD'
  | 'SDH'
  | 'SUG'
  | 'SUM'
  | 'SUU'
  | 'SUN'
  | 'SUP'
  | 'SNG'
  | 'SNY'
  | 'SUR'
  | 'SQE'
  | 'SUO'
  | 'SUT'
  | 'SUC'
  | 'SPK'
  | 'SWB'
  | 'SWL'
  | 'SAY'
  | 'SWM'
  | 'SWA'
  | 'SWF'
  | 'SNW'
  | 'SWY'
  | 'SWG'
  | 'SWD'
  | 'SWC'
  | 'SWI'
  | 'XDK'
  | 'SWE'
  | 'SNN'
  | 'SWN'
  | 'SYD'
  | 'SYH'
  | 'SYL'
  | 'SYS'
  | 'TAC'
  | 'TAD'
  | 'TAF'
  | 'TAI'
  | 'TLC'
  | 'TAL'
  | 'TLB'
  | 'TAB'
  | 'TAM'
  | 'TYB'
  | 'TAP'
  | 'TBT'
  | 'TAT'
  | 'TAU'
  | 'XDQ'
  | 'XCV'
  | 'TAY'
  | 'TED'
  | 'TVA'
  | 'TEA'
  | 'TGM'
  | 'TFC'
  | 'TMC'
  | 'TEN'
  | 'TEY'
  | 'THD'
  | 'THA'
  | 'THH'
  | 'THW'
  | 'TLK'
  | 'THE'
  | 'TEO'
  | 'TTF'
  | 'THI'
  | 'TBY'
  | 'TNN'
  | 'TNS'
  | 'THO'
  | 'THB'
  | 'TNA'
  | 'TTH'
  | 'THT'
  | 'TPB'
  | 'TPC'
  | 'TLS'
  | 'TBD'
  | 'TOK'
  | 'THU'
  | 'THC'
  | 'THS'
  | 'TRS'
  | 'TBR'
  | 'TIL'
  | 'THL'
  | 'TLH'
  | 'TIN'
  | 'XCY'
  | 'TIP'
  | 'TIR'
  | 'TEE'
  | 'TIS'
  | 'XDA'
  | 'TVP'
  | 'TOB'
  | 'TOD'
  | 'TOL'
  | 'TPN'
  | 'TON'
  | 'TDU'
  | 'TNF'
  | 'TNP'
  | 'TOO'
  | 'TOP'
  | 'TQY'
  | 'TRR'
  | 'TOT'
  | 'TCR'
  | 'TOM'
  | 'TTN'
  | 'ZTH'
  | 'TWN'
  | 'TRA'
  | 'XTO'
  | 'TRF'
  | 'TRE'
  | 'TRH'
  | 'TRB'
  | 'TRY'
  | 'TRM'
  | 'TRI'
  | 'TRD'
  | 'TRN'
  | 'TRO'
  | 'TRU'
  | 'TUL'
  | 'TUH'
  | 'TBW'
  | 'TUR'
  | 'ZTG'
  | 'ZTL'
  | 'TUT'
  | 'TWB'
  | 'TWI'
  | 'TWY'
  | 'TYC'
  | 'TGS'
  | 'TYG'
  | 'TYL'
  | 'TYP'
  | 'TYS'
  | 'TYW'
  | 'UCK'
  | 'UDD'
  | 'UIG'
  | 'ULC'
  | 'ULP'
  | 'ULL'
  | 'ULV'
  | 'UMB'
  | 'UNI'
  | 'UNV'
  | 'UHA'
  | 'UPL'
  | 'UPM'
  | 'ZUM'
  | 'UPH'
  | 'UHL'
  | 'UTY'
  | 'UWL'
  | 'UPT'
  | 'UPW'
  | 'URM'
  | 'UTT'
  | 'VAL'
  | 'VAE'
  | 'VXH'
  | 'VIR'
  | 'WDO'
  | 'WBE'
  | 'WAD'
  | 'WFL'
  | 'WKK'
  | 'WKF'
  | 'WKD'
  | 'WLG'
  | 'WLV'
  | 'XWX'
  | 'WLT'
  | 'WAF'
  | 'WAM'
  | 'WSL'
  | 'WDN'
  | 'WLC'
  | 'WHC'
  | 'WMW'
  | 'WAO'
  | 'WAL'
  | 'WON'
  | 'WAN'
  | 'WSW'
  | 'WWR'
  | 'WNT'
  | 'WNP'
  | 'XDC'
  | 'WPE'
  | 'WBL'
  | 'WAR'
  | 'WRM'
  | 'WGV'
  | 'WMN'
  | 'WNH'
  | 'WBQ'
  | 'WAC'
  | 'WAW'
  | 'WRW'
  | 'WRP'
  | 'XWU'
  | 'WCT'
  | 'WTO'
  | 'WBC'
  | 'WTR'
  | 'WLO'
  | 'ZWA'
  | 'WFH'
  | 'WFJ'
  | 'WFN'
  | 'WTG'
  | 'WAS'
  | 'WNG'
  | 'WAV'
  | 'WED'
  | 'WER'
  | 'WEE'
  | 'WET'
  | 'WMG'
  | 'WLI'
  | 'WEL'
  | 'WLN'
  | 'XDH'
  | 'WEN'
  | 'WLP'
  | 'WGC'
  | 'WLW'
  | 'WEM'
  | 'WMB'
  | 'WCX'
  | 'WMS'
  | 'WND'
  | 'WNN'
  | 'WSA'
  | 'WBP'
  | 'WBY'
  | 'WCL'
  | 'WCY'
  | 'WDT'
  | 'WDU'
  | 'WEA'
  | 'WEH'
  | 'WHD'
  | 'WHP'
  | 'WHR'
  | 'WKB'
  | 'WKI'
  | 'WMA'
  | 'WNW'
  | 'WRU'
  | 'WRN'
  | 'WLD'
  | 'WSU'
  | 'WWI'
  | 'WWO'
  | 'WSB'
  | 'XDS'
  | 'WCF'
  | 'WCB'
  | 'WHA'
  | 'WTA'
  | 'WFI'
  | 'WES'
  | 'WGA'
  | 'WHG'
  | 'WNM'
  | 'WSM'
  | 'WRL'
  | 'WYB'
  | 'WEY'
  | 'WYQ'
  | 'WBR'
  | 'WHE'
  | 'WTS'
  | 'WFF'
  | 'WHM'
  | 'WNL'
  | 'WHN'
  | 'WTB'
  | 'WTZ'
  | 'WHT'
  | 'WCH'
  | 'WTC'
  | 'WHL'
  | 'WNY'
  | 'ZLW'
  | 'WCR'
  | 'WTH'
  | 'WHH'
  | 'WTL'
  | 'WBD'
  | 'WTE'
  | 'WHI'
  | 'WLE'
  | 'WLF'
  | 'WTN'
  | 'WWL'
  | 'WHY'
  | 'WHS'
  | 'WCK'
  | 'WIC'
  | 'WCM'
  | 'WDD'
  | 'WID'
  | 'WMR'
  | 'WGN'
  | 'WGW'
  | 'WGT'
  | 'WMI'
  | 'WIJ'
  | 'WLM'
  | 'WIL'
  | 'WMC'
  | 'WML'
  | 'WNE'
  | 'WIM'
  | 'WBO'
  | 'WSE'
  | 'WIN'
  | 'WNF'
  | 'WIH'
  | 'WDM'
  | 'WNC'
  | 'WNR'
  | 'WNS'
  | 'WTI'
  | 'WSF'
  | 'WIS'
  | 'WSH'
  | 'WTM'
  | 'WTY'
  | 'WMP'
  | 'WTT'
  | 'WVF'
  | 'WIV'
  | 'WOB'
  | 'WOK'
  | 'WKM'
  | 'WOH'
  | 'WVH'
  | 'WOL'
  | 'WOM'
  | 'WDE'
  | 'WST'
  | 'WDB'
  | 'WOD'
  | 'WGR'
  | 'WDL'
  | 'WDH'
  | 'WDS'
  | 'WLY'
  | 'WDY'
  | 'WME'
  | 'WSR'
  | 'WOO'
  | 'WLS'
  | 'WWC'
  | 'WWA'
  | 'WWD'
  | 'XDI'
  | 'WWW'
  | 'WOF'
  | 'WCP'
  | 'WOS'
  | 'WOP'
  | 'WKG'
  | 'WOX'
  | 'WRK'
  | 'WOR'
  | 'WPL'
  | 'WRT'
  | 'WRH'
  | 'WRB'
  | 'WRY'
  | 'WRE'
  | 'WRS'
  | 'WXC'
  | 'WRX'
  | 'WYE'
  | 'WYM'
  | 'WYL'
  | 'WMD'
  | 'WYT'
  | 'YAL'
  | 'YRD'
  | 'YRM'
  | 'YMH'
  | 'YAE'
  | 'YAT'
  | 'YEO'
  | 'YVB'
  | 'YVJ'
  | 'YVP'
  | 'YET'
  | 'YNW'
  | 'YOK'
  | 'YRK'
  | 'YRT'
  | 'YSM'
  | 'YSR';
