import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "CR7 Token swap platform",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1s7rll7vxgd35kst3hltzeh6yjvsjhcvaues5aqhsr4nq8jfp54ysanplnd",
            cw20: "andr1q5mh4nlq3dgw70hjuu622g4efe5s0f9gwleqm64sh9qgd9q5ra7q294d0w",
            name: "CR7 Token swap platform",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
