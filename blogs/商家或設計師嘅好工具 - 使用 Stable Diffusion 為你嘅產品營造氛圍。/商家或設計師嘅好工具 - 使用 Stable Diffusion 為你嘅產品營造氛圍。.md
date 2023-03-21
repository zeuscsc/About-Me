如果你有以下嘅產品照片，而你想要場景更加豐富嘅話，你可以預訂一個攝影棚拍攝一些氛圍營造照片或者你可以使用 Stable Diffusion，在前往攝影棚之前為你創造一些圖片。

| Product | Mood Shot |
|:---------:|:-----:|
|![Original bottle of wine](https://asset-cdn.tecky.io/2023/03/21/00022_uid_641970fbce5ab.png)| ![Ai Generated Wine Mood Shot](https://asset-cdn.tecky.io/2023/03/21/Pasted-image-20230321144929_uid_641970ff8a000.png)|

就好似上次咁，你可以使用提示來控制 Stable Diffusion 生成圖像嘅方式。呢張相係其生成過程嘅截圖。
![Screenshot of generating process](https://asset-cdn.tecky.io/2023/03/21/_uid_6419710227f06.png)
唔似上次咁，我冇使用 Txt2Img 嘅控制網格，反而使用 Inpaint 完成咗呢個任務。呢個係因為如果你想要保留原始圖像嘅部分，例如產品嘅氛圍或者場景，你應該使用 Inpaint 完成呢個任務。

| Hand draw Inpaint | Effect |
|:---------:|:-----:|
|![Inpaint screenshot.png](https://asset-cdn.tecky.io/2023/03/21/Inpaint_screenshot_uid_641970fe3b928.png)|![bad inpaint demo.png](https://asset-cdn.tecky.io/2023/03/21/bad_inpaint_demo_uid_641970fd4dc8f.png)|
雖然有另一個叫做 Inpaint 嘅選擇，但係唔建議用作專業嘅設計、演示或氛圍場景。因為你喺呢到畫嘅 Mask（話比 AI 保留邊個部分 - EG:你嘅產品）好唔準確，會導致生成一張唔好嘅圖片。

順帶一提，Mask 係一張黑白圖像，呈現出你想要保留嘅物體形狀。
喺呢一部分，我哋會使用 Photoshop / Ai 嘅來準備 Mask。

| Photoshop | Ai |
|:---------:|:-----:|
| ![Photoshop mask.png](https://asset-cdn.tecky.io/2023/03/21/00027---Copy_uid_641970fc2d1da.png)| ![Ai Mask.png](https://asset-cdn.tecky.io/2023/03/21/wine_mask---Copy_uid_64197100f19c6.png)|
|手動|自動|
|實心形狀|過渡形狀|
Photoshop's Mask 適合用喺硬物件例如汽車、瓶子、電子產品等等。而 Ai 嘅 Mask 通常適用於毛髮等柔軟物件。

完成以上步驟之後，你就可以透過調整設定同 Prompts 來生成更多圖片，從而獲得你想要嘅圖像。

呢度有一啲透過更改設定同 Prompts 所生成嘅其他圖像。

|餐廳|Denoise = 0.5|花園|
|:---------:|:-----:|:-----:|
|![Restaurant Wine Scene](https://asset-cdn.tecky.io/2023/03/21/Pasted-image-20230321144929_uid_641970ff8a000.png)|![Denoise = 0.5 scene](https://asset-cdn.tecky.io/2023/03/21/00420-518391835_uid_641970fcb5f7e.png)|![Garden wine Scene](https://asset-cdn.tecky.io/2023/03/21/Pasted-image-20230321161445_uid_6419710096cda.png)|  
|Prompts 最後改為餐廳。|Denoise <br>係指生成嘅圖像有幾似原圖。|Prompts 最後改為花園。
