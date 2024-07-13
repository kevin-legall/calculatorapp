import {ToucheViewModel} from "../features/calculation/keypad/models/ToucheViewModel";
import {TypeTouche} from "../features/calculation/keypad/models/TypeTouche";
import {ExpressionHelper} from "../CEngine/Infrastructure/Helpers/ExpressionHelper";

export const touchesData = [
    new ToucheViewModel("687fc5fd-8d6e-4bc6-b1c0-355edda1a3f4", "C", "", TypeTouche.CLEAR, "function clear"),
    new ToucheViewModel("4yf3bbcc-ab4f-4c1a-9446-9b7957f23352", "hist", "", TypeTouche.NONE, "function hist"),
    new ToucheViewModel("3bf3bbcc-ab4f-4c1a-9446-9b7957f23352", "conv", "", TypeTouche.NONE, "function conv"),
    new ToucheViewModel("e96a3ac3-5987-4c56-b683-a0d40bce7c20", "sales", "", TypeTouche.NONE, "function sales"),
    new ToucheViewModel("302f67a6-5933-4168-a766-711fa829d9c4", "𝝿", ExpressionHelper.displayResult(Math.PI.toFixed(2).toString()), TypeTouche.PI, "function pi"),
    new ToucheViewModel("9f033e9e-d673-49f5-a1f5-5327f5119ee0", "𝑥ʸ", "^", TypeTouche.PUISSANCE, "function xy"),
    new ToucheViewModel("91c8c53a-11e2-42fe-b114-d10c1a83cbe9", "Rand", "Rand", TypeTouche.CHIFFRE, "function rand"),
    new ToucheViewModel("9z7hc5fd-8d6e-4bc6-b1c0-355edda1azd3", "", "", TypeTouche.SWITCHMODE, ""),
    new ToucheViewModel("febec26b-c5a3-419d-83a7-d2e1d2a181d3", "%", "%", TypeTouche.PERCENTAGE, "function prct"),
    new ToucheViewModel("4ebfcd4c-276f-4673-9d7a-571e37f0b0fa", "÷", "/", TypeTouche.OPERATEUR, "function operator div"),
    new ToucheViewModel("bae53ff8-785d-4b67-9111-8b55206855d7", "7", "7", TypeTouche.CHIFFRE, "function number seven"),
    new ToucheViewModel("5e70d7cf-a30a-4ca3-a8fd-cc327ebaeb84", "8", "8", TypeTouche.CHIFFRE, "function number eight"),
    new ToucheViewModel("73ccead3-6dd7-4f61-b182-38cf841c826c", "9", "9", TypeTouche.CHIFFRE, "function number nine"),
    new ToucheViewModel("88e56221-e846-4652-b7fa-0d7ea2404de8", "x", "x", TypeTouche.OPERATEUR, "function operator times"),
    new ToucheViewModel("bc855836-2fe9-4a65-a78b-486ce55527cc", "4", "4", TypeTouche.CHIFFRE, "function number four"),
    new ToucheViewModel("e122e3e1-a569-49f2-9599-916604f997f8", "5", "5", TypeTouche.CHIFFRE, "function number five"),
    new ToucheViewModel("fdc683cc-c86a-4095-9d48-37d1d2dbf883", "6", "6", TypeTouche.CHIFFRE, "function number six"),
    new ToucheViewModel("9f1089b5-5378-4ddf-9110-b73c135aaa9c", "-", "-", TypeTouche.OPERATEUR, "function operator minus"),
    new ToucheViewModel("9bbe2355-7e4d-4759-8285-e111d5b27a7c", "1", "1", TypeTouche.CHIFFRE, "function number one"),
    new ToucheViewModel("30f3612a-9038-4c7d-a67b-e25f68b1b551", "2", "2", TypeTouche.CHIFFRE, "function number two"),
    new ToucheViewModel("6c93c71d-d44a-4eae-9e89-aa2cf4558a8f", "3", "3", TypeTouche.CHIFFRE, "function number three"),
    new ToucheViewModel("67307ced-ec70-4ae1-af98-6b355e96e6dc", "+", "+", TypeTouche.OPERATEUR, "function operator plus"),
    new ToucheViewModel("1c8110e5-33cc-4020-a950-c910818eefb3", "0", "0", TypeTouche.CHIFFRE, "number zero"),
    new ToucheViewModel("f34f67c1-a73c-40a0-8165-7cf39bc11730", ",", ",", TypeTouche.VIRGULE, "number dot"),
    new ToucheViewModel("3b6e62a4-64a1-4cd7-bb13-867bd466de32", "(", "(", TypeTouche.PARENTHESE, "function paro"),
    new ToucheViewModel("5aaeedde-8dc5-434a-a00e-77493b9cbc21", ")", ")", TypeTouche.PARENTHESE, "function parc"),
    new ToucheViewModel("53c98677-3a43-4812-a68c-4793d43d5f83", "⌫", "", TypeTouche.DELETE, "number del"),
    new ToucheViewModel("152c3498-b9ff-470d-ac19-057400de56fa", "=", "", TypeTouche.EGAL, "btn equal"),

];