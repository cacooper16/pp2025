"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("450c749c-e8e0-4ca0-8282-0ab650f85be5");
		// Hide the default chatbox icon
		window.$crisp = window.$crisp || [];
		window.$crisp.push(["do", "chat:hide"]);
	}, []);

	return null;
};

export default CrispChat;
