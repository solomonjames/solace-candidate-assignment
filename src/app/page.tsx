"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { type AdvocateEntity } from '@/db/schema';
import { advocateApi } from '@/lib/api';
import Header from '@/components/home/Header';
import SearchBar from '@/components/home/SearchBar';
import AdvocatesTable from '@/components/home/AdvocatesTable';

export default function Home() {
  const [advocates, setAdvocates] = useState<AdvocateEntity[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<AdvocateEntity[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("fetching advocates...");
    advocateApi.fetchAll().then((data) => {
        setAdvocates(data.data);
        setFilteredAdvocates(data.data);
    });
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchTerm(value);

    console.log("filtering advocates...");
    const filtered = advocates.filter((advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.some(s => s.includes(searchTerm)) ||
        advocate.yearsOfExperience.toString().includes(searchTerm)
      );
    });

    setFilteredAdvocates(filtered);
  };

  const onClick = () => {
    setFilteredAdvocates(advocates);
    setSearchTerm("");
  };

  return (
    <Container maxW="6xl" py="6">
      <Header />
      <SearchBar searchTerm={searchTerm} onChange={onChange} onClick={onClick} />
      <AdvocatesTable advocates={filteredAdvocates} />
    </Container>
  );
}
