resource "aws_vpc" "main" {
    cidr_block = "10.0.0.0/16"

    tags = {
      Name = "DevFlow-vpc"
    }
}

resource "aws_subnet" "public_subnet" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.0.0/24"
map_public_ip_on_launch = true

    tags = {
      Name = "DevFlow-public-subnet"
    }
}

resource "aws_internet_gateway" "igw" {
    vpc_id = aws_vpc.main.id

    tags = {
      Name = "DevFlow-igw"
    }
}

resource "aws_route_table" "rt" {
    vpc_id = aws_vpc.main.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.igw.id

    }
    

    tags = {
      Name = "DevFlow-rt"
    }
}

resource "aws_route_table_association" "rta" {
    subnet_id = aws_subnet.public_subnet.id
    route_table_id = aws_route_table.rt.id
  
}