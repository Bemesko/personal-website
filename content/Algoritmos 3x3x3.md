## Referência Triggers
- R U R' - RPair
- R U' R' - RSplit
- R U2 R' - RU2Pair
- R' U' R - R'Pair
- R U R - RSobe 
- R U' R - RSplitSobe
- R' U2 R' - RU2Desce

## PLL
- Ra: (RSplit) U' (RSobe) D (R'Pair) D' (Ru2Desce)
	- Lookahead: headlights na esquerda + bloco na frente
	- AUF - corner FRU mantém cor
- Rb: R2 F (RSobe) U' R' F' (Ru2Pair) U2 R
	- Lookahead: headlights na esquerda + bloco atrás
	- AUF - edge FU mantém cor
- Nb: R' U (RSplit) F' U' F (RPair) F R' F' (RSplitSobe)