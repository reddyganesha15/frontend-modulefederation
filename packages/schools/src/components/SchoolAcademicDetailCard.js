import React, { useState } from "react";
import { Box, VStack, HStack, Divider, Actionsheet, Stack } from "native-base";
import {
  H2,
  IconByName,
  Collapsible,
  H3,
  BodyMedium,
} from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function SchoolAcademicDetailCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [academicDetailModal, setAcademicDetailModal] = useState(false);
  return (
    <>
      <Collapsible
        defaultCollapse={true}
        header={
          <Box py={4}>
            <H2>Academic Details</H2>
          </Box>
        }
      >
        <>
          <Divider mb={4} />
          <VStack space={6}>
            <Box
              p={6}
              borderColor={"schools.lightGray3"}
              bg={"schools.lightGray5"}
              borderWidth={1}
              rounded={10}
            >
              <HStack alignItems="center" justifyContent="space-between">
                <Box>
                  <VStack>
                    <H3 color={"schools.bodyText"}>Class I</H3>
                    <BodyMedium color={"schools.gray"}>65 Students</BodyMedium>
                  </VStack>
                </Box>
                <IconByName
                  name="ArrowRightSLineIcon"
                  onPress={() => setAcademicDetailModal(true)}
                  color={"schools.lightGray"}
                />
              </HStack>
            </Box>

            <Box
              p={6}
              borderColor={"schools.lightGray3"}
              bg={"schools.lightGray5"}
              borderWidth={1}
              rounded={10}
            >
              <HStack alignItems="center" justifyContent="space-between">
                <Box>
                  <VStack>
                    <H3 color={"schools.bodyText"}>Class II</H3>
                    <BodyMedium color={"schools.gray"}>69 Students</BodyMedium>
                  </VStack>
                </Box>
                <IconByName
                  name="ArrowRightSLineIcon"
                  onPress={() => setAcademicDetailModal(true)}
                  color={"schools.lightGray"}
                />
              </HStack>
            </Box>
          </VStack>
        </>
      </Collapsible>
      <Actionsheet
        isOpen={academicDetailModal}
        onClose={() => setAcademicDetailModal(false)}
      >
        <Actionsheet.Content alignItems={"left"} bg={"schools.cardBg"}>
          <HStack justifyContent={"space-between"}>
            <Stack p={5} pt={2} pb="15px">
              <H2>{t("Select Academic Details")}</H2>
            </Stack>
            <IconByName
              name="CloseCircleLineIcon"
              color={"schools.darkGray"}
              onPress={() => setAcademicDetailModal(false)}
            />
          </HStack>
        </Actionsheet.Content>
        <Box w="100%" p={4} justifyContent="center" bg={"schools.white"}>
          <Actionsheet.Item
            onPress={() => navigate("/schools/attendance-report")}
          >
            Attendance Reports
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => navigate("/schools/assessment-report")}
          >
            Assessment Reports
          </Actionsheet.Item>
        </Box>
      </Actionsheet>
    </>
  );
}
