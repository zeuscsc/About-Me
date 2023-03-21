
## 呢幅圖會唔會喺你心中喚起啲回憶呢？
![Image of 2 stationary a pen and a ruler](https://asset-cdn.tecky.io/2023/03/21/dbe331af600063b233d211bca6ad7a1b_uid_64196ce026ade.jpg)

## 當你看到這支筆和尺子組成的飛機時，是否會浮現以下這張圖片在你腦海中？
![Aircraft fly on a sea](https://asset-cdn.tecky.io/2023/03/21/Pasted-image-20230320172942_uid_64196d1e3cf84.png)

## 今天我會向你展示如何在簡單幾個點擊中完成這個操作。

在你完成 AWS 的所有設定後，當你進入自己的網站時，你應該能夠看到以下的內容：

![webui_screenshot.png](https://asset-cdn.tecky.io/2023/03/21/webui_screenshot_uid_64196e9c11ef4.png)

默認情況下，當你打開 WebUI 時，它將使用 Stable Diffusion 1.5
![sd-v1-5-cp_screenshot.png](https://asset-cdn.tecky.io/2023/03/21/sd-v1-5-cp_screenshot_uid_64196d818655e.png)
把它改為 2.1
![sd-v2-1-cp_screenshot.png](https://asset-cdn.tecky.io/2023/03/21/sd-v2-1-cp_screenshot_uid_64196d90d76fb.png)

如果你對 Prompt 不是很熟悉，你可以進入 Interrogator，將圖像拖到那裡，點擊生成（generate）然後自己查看結果。
![interrogator_screenshot.png](https://asset-cdn.tecky.io/2023/03/21/interrogator_screenshot_uid_64196da9d84db.png)
使用一張與你目標相似的圖像在 Interrogator 中可以幫助生成更接近你目標的圖像。

修改Prompt以滿足你的需求，然後按照所示更改設置。
![settings_screenhort.png](https://asset-cdn.tecky.io/2023/03/21/settings_screenhort_uid_64196dc8eff37.png)
這是 ControlNet 的設置。
![controlnet_settings_screenshot.png](https://asset-cdn.tecky.io/2023/03/21/controlnet_settings_screenshot_uid_64196df5cc0c0.png)
沒有保證 Stable Diffusion V1.5 或 V2.1 哪一個會獲得更好的結果，儘管 2.1 比 1.5 更晚推出，但 1.5 的社區更大且具有更多的訓練樣本。因此，有時 V1.5 會提供更好的結果。

如果你有一些特殊風格或特殊圖像想要生成，你可以在現有的網站上尋找，或者訓練自己的模型。

如果你想從社群中獲取更多的模型而不是訓練自己的模型，[CivitAi](https://civitai.com/)是一個很好的網站。
![civitai_cars_screenshot.png](https://asset-cdn.tecky.io/2023/03/21/civitai_cars_screenshot_uid_64196f2fb9eab.png)
但如果你找不到符合你需求的模型，或者想嘗試訓練自己的模型，你可以嘗試混合不同的模型或使用一些圖片來使用Lora進行訓練，以獲得更符合你需求的結果。

這次我加入了一些來自Interrogator的Prompts，並切換到Realistic_Vision_V1.4模型，結果是：
![fighter_jet_demo_screenshot.png](https://asset-cdn.tecky.io/2023/03/21/fighter_jet_demo_screenshot_uid_64196d616f77d.png)
如果你想要更精確的飛行器或更類似歷史圖像，你可以尋找一些圖像並進行訓練。我可以在未來提供更多相關的訊息。
![train_aircraft_demo.png](https://asset-cdn.tecky.io/2023/03/21/train_aircraft_demo_uid_64196ebec9474.png)
一個包含一些飛機的 Lora 模型。飛機的細節更合符真實。