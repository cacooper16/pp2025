"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("450c749c-e8e0-4ca0-8282-0ab650f85be5");
	});

	return null;
};

export default CrispChat;
